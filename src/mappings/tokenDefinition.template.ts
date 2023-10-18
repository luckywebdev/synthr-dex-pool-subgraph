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
      address: Address.fromString('{{ syNative }}'),
      symbol: '{{ syNativeSymbol }}',
      name: '{{ syNativeName }}',
      decimals: BigInt.fromI32(18)
    }, {
      address: Address.fromString('{{ usdc }}'),
      symbol: 'USDC',
      name: 'Mock USDC',
      decimals: BigInt.fromI32(18)
    }, {
      address: Address.fromString('{{ wrappedNative }}'),
      symbol: '{{ wrappedNativeSymbol }}',
      name: '{{ wrappedNativeName }}',
      decimals: BigInt.fromI32(18)
    }
  ]

  return staticDefinitions
}
