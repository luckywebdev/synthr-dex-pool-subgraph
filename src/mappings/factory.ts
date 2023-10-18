import { ethereum } from '@graphprotocol/graph-ts';
import { WHITELIST_TOKENS } from './helpers'
/* eslint-disable prefer-const */
import { ZERO_BD, ZERO_BI, fetchTokenSymbol, fetchTokenName, fetchTokenDecimals, SyETH_ETH_POOL, USDC_ETH_POOL } from './helpers'
import { Pool, Token, Bundle, TokenDefinition } from '../types/schema'
import { Pool as PoolTemplate } from '../types/templates'
import { PoolCreated } from '../types/Factory/Factory'
import { Address } from '@graphprotocol/graph-ts'
import { getTokenDefinitions } from './tokenDefinition'

export function handlePoolCreated(event: PoolCreated): void {
  // // temp fix
  if (event.params.pool != Address.fromHexString(SyETH_ETH_POOL) && event.params.pool != Address.fromHexString(USDC_ETH_POOL)) {
    return
  }
  // create new bundle for tracking eth price
  let bundle = new Bundle('1')
  bundle.ethPriceUSD = ZERO_BD
  bundle.save()

  let pool = new Pool(event.params.pool.toHexString()) as Pool
  let token0 = Token.load(event.params.token0.toHexString())
  let token1 = Token.load(event.params.token1.toHexString())

  // fetch info if null
  if (token0 === null) {
    token0 = new Token(event.params.token0.toHexString())
    token0.symbol = fetchTokenSymbol(event.params.token0)
    token0.name = fetchTokenName(event.params.token0)
    // token0.totalSupply = fetchTokenTotalSupply(event.params.token0)
    let decimals = fetchTokenDecimals(event.params.token0)

    // // bail if we couldn't figure out the decimals
    // if (decimals === null) {
    //   // log.debug('mybug the decimal on token 0 was null', [])
    //   return
    // }

    token0.decimals = decimals
    token0.derivedETH = ZERO_BD
    token0.volume = ZERO_BD
    token0.volumeUSD = ZERO_BD
    token0.untrackedVolumeUSD = ZERO_BD
    token0.totalValueLocked = ZERO_BD
    token0.totalValueLockedUSD = ZERO_BD
    token0.totalValueLockedUSDUntracked = ZERO_BD
    token0.txCount = ZERO_BI
    token0.poolCount = ZERO_BI
    token0.whitelistPools = []
  }

  if (token1 === null) {
    token1 = new Token(event.params.token1.toHexString())
    token1.symbol = fetchTokenSymbol(event.params.token1)
    token1.name = fetchTokenName(event.params.token1)
    // token1.totalSupply = fetchTokenTotalSupply(event.params.token1)
    let decimals = fetchTokenDecimals(event.params.token1)
    // // bail if we couldn't figure out the decimals
    // if (decimals === null) {
    //   // log.debug('mybug the decimal on token 0 was null', [])
    //   return
    // }
    token1.decimals = decimals
    token1.derivedETH = ZERO_BD
    token1.volume = ZERO_BD
    token1.volumeUSD = ZERO_BD
    token1.untrackedVolumeUSD = ZERO_BD
    token1.totalValueLocked = ZERO_BD
    token1.totalValueLockedUSD = ZERO_BD
    token1.totalValueLockedUSDUntracked = ZERO_BD
    token1.txCount = ZERO_BI
    token1.poolCount = ZERO_BI
    token1.whitelistPools = []
  }

  // update white listed pools
  if (WHITELIST_TOKENS.includes(token0.id)) {
    let newPools = token1.whitelistPools
    newPools.push(pool.id)
    token1.whitelistPools = newPools
  }
  if (WHITELIST_TOKENS.includes(token1.id)) {
    let newPools = token0.whitelistPools
    newPools.push(pool.id)
    token0.whitelistPools = newPools
  }

  pool.token0 = token0.id
  pool.token1 = token1.id
  pool.createdAtTimestamp = event.block.timestamp
  pool.createdAtBlockNumber = event.block.number
  pool.txCount = ZERO_BI
  pool.liquidity = ZERO_BI
  pool.tick = ZERO_BI
  pool.sqrtPrice = ZERO_BI
  pool.token0Price = ZERO_BD
  pool.token1Price = ZERO_BD
  pool.totalValueLockedToken0 = ZERO_BD
  pool.totalValueLockedToken1 = ZERO_BD
  pool.totalValueLockedUSD = ZERO_BD
  pool.totalValueLockedETH = ZERO_BD
  pool.totalValueLockedUSDUntracked = ZERO_BD
  pool.volumeToken0 = ZERO_BD
  pool.volumeToken1 = ZERO_BD
  pool.volumeUSD = ZERO_BD
  pool.untrackedVolumeUSD = ZERO_BD

  pool.save()
  // create the tracked contract based on the template
  PoolTemplate.create(event.params.pool)
  token0.save()
  token1.save()
}

export function handleOnce(block: ethereum.Block): void {
  const tokenDefinitions = getTokenDefinitions();
  for (let i = 0; i < tokenDefinitions.length; i++) {
    let staticDefinition = tokenDefinitions[i]
    let synthDefinition = TokenDefinition.load(staticDefinition.address.toHexString())
    if (synthDefinition === null) {
      synthDefinition = new TokenDefinition(staticDefinition.address.toHexString())
      synthDefinition.symbol = staticDefinition.symbol
      synthDefinition.name = staticDefinition.name
      synthDefinition.decimals = staticDefinition.decimals
      synthDefinition.save()
    }
  }
}