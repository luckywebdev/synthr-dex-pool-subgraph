/* eslint-disable prefer-const */
import { DEFAULT_ETH_PRICE, LOWER_LIMIT_ETH_PRICE, ONE_BD, UPPER_LIMIT_ETH_PRICE, USDC_ETH_POOL, WETH_ADDRESS, STABLE_COINS, WHITELIST_TOKENS, ZERO_BD, ZERO_BI, exponentToBigDecimal, safeDiv } from './helpers'
import { Bundle, Pool, Token } from './../types/schema'
import { BigDecimal, BigInt } from '@graphprotocol/graph-ts'

let MINIMUM_ETH_LOCKED = BigDecimal.fromString('0.1')

const Q192 = BigInt.fromI32(2).pow(192)
export function sqrtPriceX96ToTokenPrices(sqrtPriceX96: BigInt, token0: Token, token1: Token): BigDecimal[] {
  let num = sqrtPriceX96.times(sqrtPriceX96).toBigDecimal()
  let denom = Q192.toBigDecimal()
  let price1 = exponentToBigDecimal(token1.decimals) == ZERO_BD ? ONE_BD : num
    .div(denom)
    .times(exponentToBigDecimal(token0.decimals))
    .div(exponentToBigDecimal(token1.decimals))

  let price0 = safeDiv(BigDecimal.fromString('1'), price1)
  return [price0, price1]
}

export function getEthPriceInUSD(): BigDecimal {
  // fetch eth prices for each stablecoin
  let usdcPool = Pool.load(USDC_ETH_POOL) // dai is token0
  if (usdcPool !== null) {
    if (usdcPool.token0Price.gt(UPPER_LIMIT_ETH_PRICE) || usdcPool.token0Price.lt(LOWER_LIMIT_ETH_PRICE)) {
      return DEFAULT_ETH_PRICE
    }
    return usdcPool.token0Price
  } else {
    return DEFAULT_ETH_PRICE
  }
}

/**
 * Search through graph to find derived Eth per token.
 * @todo update to be derived ETH (add stablecoin estimates)
 **/
export function findEthPerToken(token: Token): BigDecimal {
  if (token.id == WETH_ADDRESS) {
    return ONE_BD
  }
  let whiteList = token.whitelistPools
  // for now just take USD from pool with greatest TVL
  // need to update this to actually detect best rate based on liquidity distribution
  let largestLiquidityETH = ZERO_BD
  let priceSoFar = ZERO_BD
  let bundle = Bundle.load('1')
  let ethPriceUSD = bundle === null ? ONE_BD : bundle.ethPriceUSD

  // hardcoded fix for incorrect rates
  // if whitelist includes token - get the safe price
  if (STABLE_COINS.includes(token.id)) {
    priceSoFar = safeDiv(ONE_BD, ethPriceUSD)
  } else {
    for (let i = 0; i < whiteList.length; ++i) {
      let poolAddress = whiteList[i]
      let pool = Pool.load(poolAddress)

      if (pool === null) {
        return ONE_BD
      }

      if (pool.liquidity.gt(ZERO_BI)) {
        if (pool.token0 == token.id) {
          // whitelist token is token1
          let token1 = Token.load(pool.token1)
          if (token1 !== null) {
            // get the derived ETH in pool
            let ethLocked = pool.totalValueLockedToken1.times(token1.derivedETH)
            if (ethLocked.gt(largestLiquidityETH) && ethLocked.gt(MINIMUM_ETH_LOCKED)) {
              largestLiquidityETH = ethLocked
              // token1 per our token * Eth per token1
              priceSoFar = pool.token1Price.times(token1.derivedETH as BigDecimal)
            }
          }
        }
        if (pool.token1 == token.id) {
          let token0 = Token.load(pool.token0)
          if (token0 !== null) {
            // get the derived ETH in pool
            let ethLocked = pool.totalValueLockedToken0.times(token0.derivedETH)
            if (ethLocked.gt(largestLiquidityETH) && ethLocked.gt(MINIMUM_ETH_LOCKED)) {
              largestLiquidityETH = ethLocked
              // token0 per our token * ETH per token0
              priceSoFar = pool.token0Price.times(token0.derivedETH as BigDecimal)
            }
          }
        }
      }
    }
  }
  return priceSoFar // nothing was found return 0
}

/**
 * Accepts tokens and amounts, return tracked amount based on token whitelist
 * If one token on whitelist, return amount in that token converted to USD * 2.
 * If both are, return sum of two amounts
 * If neither is, return 0
 */
export function getTrackedAmountUSD(
  tokenAmount0: BigDecimal,
  token0: Token,
  tokenAmount1: BigDecimal,
  token1: Token
): BigDecimal {
  let bundle = Bundle.load('1')
  let ethPriceUSD = bundle === null ? ONE_BD : bundle.ethPriceUSD

  let price0USD = token0.derivedETH.times(ethPriceUSD)
  let price1USD = token1.derivedETH.times(ethPriceUSD)

  // both are whitelist tokens, return sum of both amounts
  if (WHITELIST_TOKENS.includes(token0.id) && WHITELIST_TOKENS.includes(token1.id)) {
    return tokenAmount0.times(price0USD).plus(tokenAmount1.times(price1USD))
  }

  // take double value of the whitelisted token amount
  if (WHITELIST_TOKENS.includes(token0.id) && !WHITELIST_TOKENS.includes(token1.id)) {
    return tokenAmount0.times(price0USD).times(BigDecimal.fromString('2'))
  }

  // take double value of the whitelisted token amount
  if (!WHITELIST_TOKENS.includes(token0.id) && WHITELIST_TOKENS.includes(token1.id)) {
    return tokenAmount1.times(price1USD).times(BigDecimal.fromString('2'))
  }

  // neither token is on white list, tracked amount is 0
  return ZERO_BD
}