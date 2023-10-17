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
  // // goerli
  // let staticDefinitions: Array<StaticTokenDefinition> = [
  //   {
  //     address: Address.fromString('0x3726288ee47b11e0c72daf59af38b3e73cd3b44b'),
  //     symbol: 'SyETH',
  //     name: 'Synthr syETH',
  //     decimals: BigInt.fromI32(18)
  //   }, {
  //     address: Address.fromString('0x101ed9ca766c5ba0dacc5637dd29457cb948f0ec'),
  //     symbol: 'USDC',
  //     name: 'Mock USDC',
  //     decimals: BigInt.fromI32(18)
  //   }, {
  //     address: Address.fromString('0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6'),
  //     symbol: 'WETH',
  //     name: 'Wrapped Ether',
  //     decimals: BigInt.fromI32(18)
  //   }
  // ]

  // mumbai
  let staticDefinitions: Array<StaticTokenDefinition> = [
    {
      address: Address.fromString('0x1a56c52ae106c229dfaa9d225acbd7953843de0c'),
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
