import { BigInt, BigDecimal, ethereum, Address } from '@graphprotocol/graph-ts'
import { TokenDefinition, Transaction } from '../types/schema'
export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0x1F98431c8aD98523631AE4a59f267346ea31F984'

export const ZERO_BI = BigInt.fromI32(0)
export const ONE_BI = BigInt.fromI32(1)
export const ZERO_BD = BigDecimal.fromString('0')
export const ONE_BD = BigDecimal.fromString('1')
export const BI_18 = BigInt.fromI32(18)
export const BI_6 = BigInt.fromI32(6)
export const SECONDS_IN_ONE_DAY = 86400

export function exponentToBigDecimal(decimals: BigInt): BigDecimal {
  let bd = BigDecimal.fromString('1')
  for (let i = ZERO_BI; i.lt(decimals as BigInt); i = i.plus(ONE_BI)) {
    bd = bd.times(BigDecimal.fromString('10'))
  }
  return bd
}

export function convertTokenToDecimal(tokenAmount: BigInt, exchangeDecimals: BigInt | null): BigDecimal {
  if (exchangeDecimals === null) return tokenAmount.toBigDecimal().div(exponentToBigDecimal(BI_18))
  if (exchangeDecimals == ZERO_BI) {
    return tokenAmount.toBigDecimal()
  }
  return tokenAmount.toBigDecimal().div(exponentToBigDecimal(exchangeDecimals))
}

// return 0 if denominator is 0 in division
export function safeDiv(amount0: BigDecimal, amount1: BigDecimal): BigDecimal {
  if (amount1.equals(ZERO_BD)) {
    return ZERO_BD
  } else {
    return amount0.div(amount1)
  }
}

export function fetchTokenName(tokenAddress: Address): string {
  let nameValue = 'unknown'
  let staticTokenDefinition = TokenDefinition.load(tokenAddress.toHexString())
  if(staticTokenDefinition !== null) {
    nameValue = staticTokenDefinition.name
  }

  return nameValue
}

export function fetchTokenSymbol(tokenAddress: Address): string {
  let symbolValue = 'unknown'
  let staticTokenDefinition = TokenDefinition.load(tokenAddress.toHexString())
  if(staticTokenDefinition !== null) {
    symbolValue = staticTokenDefinition.symbol
  }

  return symbolValue
}

export function fetchTokenDecimals(tokenAddress: Address): BigInt {
  let staticTokenDefinition = TokenDefinition.load(tokenAddress.toHexString())
  if(staticTokenDefinition !== null) {
    return staticTokenDefinition.decimals
  }
  return BI_18
}

export function loadTransaction(event: ethereum.Event): Transaction {
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  if (transaction === null) {
    transaction = new Transaction(event.transaction.hash.toHexString())
  }
  transaction.blockNumber = event.block.number
  transaction.timestamp = event.block.timestamp
  transaction.gasUsed = event.transaction.gasLimit
  transaction.gasPrice = event.transaction.gasPrice
  transaction.save()
  return transaction as Transaction
}
