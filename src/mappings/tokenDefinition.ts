import {
  Address,
  BigInt,
} from "@graphprotocol/graph-ts"

// Initialize a Token Definition with the attributes
export class StaticTokenDefinition {
  address : Address
  symbol: string
  name: string
  decimals: BigInt
}

// Get all tokens with a static defintion
export function getTokenDefinitions(): Array<StaticTokenDefinition> {
  let staticDefinitions: Array<StaticTokenDefinition> = [
    {
      address: Address.fromString('0x3726288ee47b11e0c72daf59af38b3e73cd3b44b'),
      symbol: 'SyETH',
      name: 'Synthr syETH',
      decimals: BigInt.fromI32(18)
    }, {
      address: Address.fromString('0x101ed9ca766c5ba0dacc5637dd29457cb948f0ec'),
      symbol: 'USDC',
      name: 'Mock USDC',
      decimals: BigInt.fromI32(18)
    }, {
      address: Address.fromString('0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6'),
      symbol: 'WETH',
      name: 'Wrapped Ether',
      decimals: BigInt.fromI32(18)
    }
  ]

  return staticDefinitions
}
