import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export const candlestickPeriods: i32[] = [
  5 * 60, // 5m
  15 * 60, // 15m
  60 * 60, // 1h
  4 * 60 * 60, // 4h
  24 * 60 * 60, // 1d
  7 * 24 * 60 * 60, // 1w
];

export const BIG_INT_ZERO = BigInt.fromI32(0);
export const BIG_DECIMAL_ONE = BigDecimal.fromString("1");
export const BIG_DECIMAL_ZERO = BigDecimal.fromString("0");
export const NULL_CALL_RESULT_VALUE =
  "0x0000000000000000000000000000000000000000000000000000000000000001";

export const SYETH_ETH_PAIR = '0xb9ece43dde280b109b7b731a09fd35247998eb28'

export const PRICE_ORACLE = '0x2514895c72f50d8bd4b4f9b1110f0d6bd2c97526'