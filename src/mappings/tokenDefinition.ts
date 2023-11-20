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
      address: Address.fromString('0x84dF5c37859E8FD0754E2D44C9eb2c5F418f7796'),
      symbol: 'SyMATIC',
      name: 'Synthr syMATIC',
      decimals: BigInt.fromI32(18)
    }, {
      address: Address.fromString('0x5e5bbd784c1cfee0f851a7baec3f068297aad1fb'),
      symbol: 'USDC',
      name: 'Mock USDC',
      decimals: BigInt.fromI32(18)
    }, {
      address: Address.fromString('0x9c3c9283d3e44854697cd22d3faa240cfb032889'),
      symbol: 'WMATIC',
      name: 'Wrapped MATIC',
      decimals: BigInt.fromI32(18)
    }
  ]

  return staticDefinitions
}
