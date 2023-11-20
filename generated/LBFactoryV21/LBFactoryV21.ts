// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class FeeRecipientSet extends ethereum.Event {
  get params(): FeeRecipientSet__Params {
    return new FeeRecipientSet__Params(this);
  }
}

export class FeeRecipientSet__Params {
  _event: FeeRecipientSet;

  constructor(event: FeeRecipientSet) {
    this._event = event;
  }

  get oldRecipient(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newRecipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class FlashLoanFeeSet extends ethereum.Event {
  get params(): FlashLoanFeeSet__Params {
    return new FlashLoanFeeSet__Params(this);
  }
}

export class FlashLoanFeeSet__Params {
  _event: FlashLoanFeeSet;

  constructor(event: FlashLoanFeeSet) {
    this._event = event;
  }

  get oldFlashLoanFee(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newFlashLoanFee(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class LBPairCreated extends ethereum.Event {
  get params(): LBPairCreated__Params {
    return new LBPairCreated__Params(this);
  }
}

export class LBPairCreated__Params {
  _event: LBPairCreated;

  constructor(event: LBPairCreated) {
    this._event = event;
  }

  get tokenX(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenY(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get binStep(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get LBPair(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get pid(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class LBPairIgnoredStateChanged extends ethereum.Event {
  get params(): LBPairIgnoredStateChanged__Params {
    return new LBPairIgnoredStateChanged__Params(this);
  }
}

export class LBPairIgnoredStateChanged__Params {
  _event: LBPairIgnoredStateChanged;

  constructor(event: LBPairIgnoredStateChanged) {
    this._event = event;
  }

  get LBPair(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ignored(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class LBPairImplementationSet extends ethereum.Event {
  get params(): LBPairImplementationSet__Params {
    return new LBPairImplementationSet__Params(this);
  }
}

export class LBPairImplementationSet__Params {
  _event: LBPairImplementationSet;

  constructor(event: LBPairImplementationSet) {
    this._event = event;
  }

  get oldLBPairImplementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get LBPairImplementation(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PendingOwnerSet extends ethereum.Event {
  get params(): PendingOwnerSet__Params {
    return new PendingOwnerSet__Params(this);
  }
}

export class PendingOwnerSet__Params {
  _event: PendingOwnerSet;

  constructor(event: PendingOwnerSet) {
    this._event = event;
  }

  get pendingOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PresetOpenStateChanged extends ethereum.Event {
  get params(): PresetOpenStateChanged__Params {
    return new PresetOpenStateChanged__Params(this);
  }
}

export class PresetOpenStateChanged__Params {
  _event: PresetOpenStateChanged;

  constructor(event: PresetOpenStateChanged) {
    this._event = event;
  }

  get binStep(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get isOpen(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class PresetRemoved extends ethereum.Event {
  get params(): PresetRemoved__Params {
    return new PresetRemoved__Params(this);
  }
}

export class PresetRemoved__Params {
  _event: PresetRemoved;

  constructor(event: PresetRemoved) {
    this._event = event;
  }

  get binStep(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class PresetSet extends ethereum.Event {
  get params(): PresetSet__Params {
    return new PresetSet__Params(this);
  }
}

export class PresetSet__Params {
  _event: PresetSet;

  constructor(event: PresetSet) {
    this._event = event;
  }

  get binStep(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get baseFactor(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get filterPeriod(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get decayPeriod(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get reductionFactor(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get variableFeeControl(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get protocolShare(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get maxVolatilityAccumulator(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class QuoteAssetAdded extends ethereum.Event {
  get params(): QuoteAssetAdded__Params {
    return new QuoteAssetAdded__Params(this);
  }
}

export class QuoteAssetAdded__Params {
  _event: QuoteAssetAdded;

  constructor(event: QuoteAssetAdded) {
    this._event = event;
  }

  get quoteAsset(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class QuoteAssetRemoved extends ethereum.Event {
  get params(): QuoteAssetRemoved__Params {
    return new QuoteAssetRemoved__Params(this);
  }
}

export class QuoteAssetRemoved__Params {
  _event: QuoteAssetRemoved;

  constructor(event: QuoteAssetRemoved) {
    this._event = event;
  }

  get quoteAsset(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LBFactoryV21__getAllLBPairsResultLbPairsAvailableStruct extends ethereum.Tuple {
  get binStep(): i32 {
    return this[0].toI32();
  }

  get LBPair(): Address {
    return this[1].toAddress();
  }

  get createdByOwner(): boolean {
    return this[2].toBoolean();
  }

  get ignoredForRouting(): boolean {
    return this[3].toBoolean();
  }
}

export class LBFactoryV21__getLBPairInformationResultLbPairInformationStruct extends ethereum.Tuple {
  get binStep(): i32 {
    return this[0].toI32();
  }

  get LBPair(): Address {
    return this[1].toAddress();
  }

  get createdByOwner(): boolean {
    return this[2].toBoolean();
  }

  get ignoredForRouting(): boolean {
    return this[3].toBoolean();
  }
}

export class LBFactoryV21__getPresetResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: boolean;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromBoolean(this.value7));
    return map;
  }

  getBaseFactor(): BigInt {
    return this.value0;
  }

  getFilterPeriod(): BigInt {
    return this.value1;
  }

  getDecayPeriod(): BigInt {
    return this.value2;
  }

  getReductionFactor(): BigInt {
    return this.value3;
  }

  getVariableFeeControl(): BigInt {
    return this.value4;
  }

  getProtocolShare(): BigInt {
    return this.value5;
  }

  getMaxVolatilityAccumulator(): BigInt {
    return this.value6;
  }

  getIsOpen(): boolean {
    return this.value7;
  }
}

export class LBFactoryV21 extends ethereum.SmartContract {
  static bind(address: Address): LBFactoryV21 {
    return new LBFactoryV21("LBFactoryV21", address);
  }

  createLBPair(
    tokenX: Address,
    tokenY: Address,
    activeId: i32,
    binStep: i32
  ): Address {
    let result = super.call(
      "createLBPair",
      "createLBPair(address,address,uint24,uint16):(address)",
      [
        ethereum.Value.fromAddress(tokenX),
        ethereum.Value.fromAddress(tokenY),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(activeId)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(binStep))
      ]
    );

    return result[0].toAddress();
  }

  try_createLBPair(
    tokenX: Address,
    tokenY: Address,
    activeId: i32,
    binStep: i32
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createLBPair",
      "createLBPair(address,address,uint24,uint16):(address)",
      [
        ethereum.Value.fromAddress(tokenX),
        ethereum.Value.fromAddress(tokenY),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(activeId)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(binStep))
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAllBinSteps(): Array<BigInt> {
    let result = super.call(
      "getAllBinSteps",
      "getAllBinSteps():(uint256[])",
      []
    );

    return result[0].toBigIntArray();
  }

  try_getAllBinSteps(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getAllBinSteps",
      "getAllBinSteps():(uint256[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getAllLBPairs(
    tokenX: Address,
    tokenY: Address
  ): Array<LBFactoryV21__getAllLBPairsResultLbPairsAvailableStruct> {
    let result = super.call(
      "getAllLBPairs",
      "getAllLBPairs(address,address):((uint16,address,bool,bool)[])",
      [ethereum.Value.fromAddress(tokenX), ethereum.Value.fromAddress(tokenY)]
    );

    return result[0].toTupleArray<
      LBFactoryV21__getAllLBPairsResultLbPairsAvailableStruct
    >();
  }

  try_getAllLBPairs(
    tokenX: Address,
    tokenY: Address
  ): ethereum.CallResult<
    Array<LBFactoryV21__getAllLBPairsResultLbPairsAvailableStruct>
  > {
    let result = super.tryCall(
      "getAllLBPairs",
      "getAllLBPairs(address,address):((uint16,address,bool,bool)[])",
      [ethereum.Value.fromAddress(tokenX), ethereum.Value.fromAddress(tokenY)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        LBFactoryV21__getAllLBPairsResultLbPairsAvailableStruct
      >()
    );
  }

  getFeeRecipient(): Address {
    let result = super.call(
      "getFeeRecipient",
      "getFeeRecipient():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getFeeRecipient(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getFeeRecipient",
      "getFeeRecipient():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getFlashLoanFee(): BigInt {
    let result = super.call(
      "getFlashLoanFee",
      "getFlashLoanFee():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getFlashLoanFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getFlashLoanFee",
      "getFlashLoanFee():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getLBPairAtIndex(index: BigInt): Address {
    let result = super.call(
      "getLBPairAtIndex",
      "getLBPairAtIndex(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );

    return result[0].toAddress();
  }

  try_getLBPairAtIndex(index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getLBPairAtIndex",
      "getLBPairAtIndex(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getLBPairImplementation(): Address {
    let result = super.call(
      "getLBPairImplementation",
      "getLBPairImplementation():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getLBPairImplementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getLBPairImplementation",
      "getLBPairImplementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getLBPairInformation(
    tokenA: Address,
    tokenB: Address,
    binStep: BigInt
  ): LBFactoryV21__getLBPairInformationResultLbPairInformationStruct {
    let result = super.call(
      "getLBPairInformation",
      "getLBPairInformation(address,address,uint256):((uint16,address,bool,bool))",
      [
        ethereum.Value.fromAddress(tokenA),
        ethereum.Value.fromAddress(tokenB),
        ethereum.Value.fromUnsignedBigInt(binStep)
      ]
    );

    return changetype<
      LBFactoryV21__getLBPairInformationResultLbPairInformationStruct
    >(result[0].toTuple());
  }

  try_getLBPairInformation(
    tokenA: Address,
    tokenB: Address,
    binStep: BigInt
  ): ethereum.CallResult<
    LBFactoryV21__getLBPairInformationResultLbPairInformationStruct
  > {
    let result = super.tryCall(
      "getLBPairInformation",
      "getLBPairInformation(address,address,uint256):((uint16,address,bool,bool))",
      [
        ethereum.Value.fromAddress(tokenA),
        ethereum.Value.fromAddress(tokenB),
        ethereum.Value.fromUnsignedBigInt(binStep)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<
        LBFactoryV21__getLBPairInformationResultLbPairInformationStruct
      >(value[0].toTuple())
    );
  }

  getMaxFlashLoanFee(): BigInt {
    let result = super.call(
      "getMaxFlashLoanFee",
      "getMaxFlashLoanFee():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getMaxFlashLoanFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getMaxFlashLoanFee",
      "getMaxFlashLoanFee():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getMinBinStep(): BigInt {
    let result = super.call("getMinBinStep", "getMinBinStep():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getMinBinStep(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getMinBinStep",
      "getMinBinStep():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNumberOfLBPairs(): BigInt {
    let result = super.call(
      "getNumberOfLBPairs",
      "getNumberOfLBPairs():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getNumberOfLBPairs(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNumberOfLBPairs",
      "getNumberOfLBPairs():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNumberOfQuoteAssets(): BigInt {
    let result = super.call(
      "getNumberOfQuoteAssets",
      "getNumberOfQuoteAssets():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getNumberOfQuoteAssets(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNumberOfQuoteAssets",
      "getNumberOfQuoteAssets():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getOpenBinSteps(): Array<BigInt> {
    let result = super.call(
      "getOpenBinSteps",
      "getOpenBinSteps():(uint256[])",
      []
    );

    return result[0].toBigIntArray();
  }

  try_getOpenBinSteps(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getOpenBinSteps",
      "getOpenBinSteps():(uint256[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getPreset(binStep: BigInt): LBFactoryV21__getPresetResult {
    let result = super.call(
      "getPreset",
      "getPreset(uint256):(uint256,uint256,uint256,uint256,uint256,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(binStep)]
    );

    return new LBFactoryV21__getPresetResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBoolean()
    );
  }

  try_getPreset(
    binStep: BigInt
  ): ethereum.CallResult<LBFactoryV21__getPresetResult> {
    let result = super.tryCall(
      "getPreset",
      "getPreset(uint256):(uint256,uint256,uint256,uint256,uint256,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(binStep)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new LBFactoryV21__getPresetResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBoolean()
      )
    );
  }

  getQuoteAssetAtIndex(index: BigInt): Address {
    let result = super.call(
      "getQuoteAssetAtIndex",
      "getQuoteAssetAtIndex(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );

    return result[0].toAddress();
  }

  try_getQuoteAssetAtIndex(index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getQuoteAssetAtIndex",
      "getQuoteAssetAtIndex(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isQuoteAsset(token: Address): boolean {
    let result = super.call("isQuoteAsset", "isQuoteAsset(address):(bool)", [
      ethereum.Value.fromAddress(token)
    ]);

    return result[0].toBoolean();
  }

  try_isQuoteAsset(token: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isQuoteAsset", "isQuoteAsset(address):(bool)", [
      ethereum.Value.fromAddress(token)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingOwner(): Address {
    let result = super.call("pendingOwner", "pendingOwner():(address)", []);

    return result[0].toAddress();
  }

  try_pendingOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("pendingOwner", "pendingOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get feeRecipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get flashLoanFee(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddQuoteAssetCall extends ethereum.Call {
  get inputs(): AddQuoteAssetCall__Inputs {
    return new AddQuoteAssetCall__Inputs(this);
  }

  get outputs(): AddQuoteAssetCall__Outputs {
    return new AddQuoteAssetCall__Outputs(this);
  }
}

export class AddQuoteAssetCall__Inputs {
  _call: AddQuoteAssetCall;

  constructor(call: AddQuoteAssetCall) {
    this._call = call;
  }

  get quoteAsset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddQuoteAssetCall__Outputs {
  _call: AddQuoteAssetCall;

  constructor(call: AddQuoteAssetCall) {
    this._call = call;
  }
}

export class BecomeOwnerCall extends ethereum.Call {
  get inputs(): BecomeOwnerCall__Inputs {
    return new BecomeOwnerCall__Inputs(this);
  }

  get outputs(): BecomeOwnerCall__Outputs {
    return new BecomeOwnerCall__Outputs(this);
  }
}

export class BecomeOwnerCall__Inputs {
  _call: BecomeOwnerCall;

  constructor(call: BecomeOwnerCall) {
    this._call = call;
  }
}

export class BecomeOwnerCall__Outputs {
  _call: BecomeOwnerCall;

  constructor(call: BecomeOwnerCall) {
    this._call = call;
  }
}

export class CreateLBPairCall extends ethereum.Call {
  get inputs(): CreateLBPairCall__Inputs {
    return new CreateLBPairCall__Inputs(this);
  }

  get outputs(): CreateLBPairCall__Outputs {
    return new CreateLBPairCall__Outputs(this);
  }
}

export class CreateLBPairCall__Inputs {
  _call: CreateLBPairCall;

  constructor(call: CreateLBPairCall) {
    this._call = call;
  }

  get tokenX(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenY(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get activeId(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get binStep(): i32 {
    return this._call.inputValues[3].value.toI32();
  }
}

export class CreateLBPairCall__Outputs {
  _call: CreateLBPairCall;

  constructor(call: CreateLBPairCall) {
    this._call = call;
  }

  get pair(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class ForceDecayCall extends ethereum.Call {
  get inputs(): ForceDecayCall__Inputs {
    return new ForceDecayCall__Inputs(this);
  }

  get outputs(): ForceDecayCall__Outputs {
    return new ForceDecayCall__Outputs(this);
  }
}

export class ForceDecayCall__Inputs {
  _call: ForceDecayCall;

  constructor(call: ForceDecayCall) {
    this._call = call;
  }

  get pair(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ForceDecayCall__Outputs {
  _call: ForceDecayCall;

  constructor(call: ForceDecayCall) {
    this._call = call;
  }
}

export class RemovePresetCall extends ethereum.Call {
  get inputs(): RemovePresetCall__Inputs {
    return new RemovePresetCall__Inputs(this);
  }

  get outputs(): RemovePresetCall__Outputs {
    return new RemovePresetCall__Outputs(this);
  }
}

export class RemovePresetCall__Inputs {
  _call: RemovePresetCall;

  constructor(call: RemovePresetCall) {
    this._call = call;
  }

  get binStep(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class RemovePresetCall__Outputs {
  _call: RemovePresetCall;

  constructor(call: RemovePresetCall) {
    this._call = call;
  }
}

export class RemoveQuoteAssetCall extends ethereum.Call {
  get inputs(): RemoveQuoteAssetCall__Inputs {
    return new RemoveQuoteAssetCall__Inputs(this);
  }

  get outputs(): RemoveQuoteAssetCall__Outputs {
    return new RemoveQuoteAssetCall__Outputs(this);
  }
}

export class RemoveQuoteAssetCall__Inputs {
  _call: RemoveQuoteAssetCall;

  constructor(call: RemoveQuoteAssetCall) {
    this._call = call;
  }

  get quoteAsset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveQuoteAssetCall__Outputs {
  _call: RemoveQuoteAssetCall;

  constructor(call: RemoveQuoteAssetCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RevokePendingOwnerCall extends ethereum.Call {
  get inputs(): RevokePendingOwnerCall__Inputs {
    return new RevokePendingOwnerCall__Inputs(this);
  }

  get outputs(): RevokePendingOwnerCall__Outputs {
    return new RevokePendingOwnerCall__Outputs(this);
  }
}

export class RevokePendingOwnerCall__Inputs {
  _call: RevokePendingOwnerCall;

  constructor(call: RevokePendingOwnerCall) {
    this._call = call;
  }
}

export class RevokePendingOwnerCall__Outputs {
  _call: RevokePendingOwnerCall;

  constructor(call: RevokePendingOwnerCall) {
    this._call = call;
  }
}

export class SetFeeRecipientCall extends ethereum.Call {
  get inputs(): SetFeeRecipientCall__Inputs {
    return new SetFeeRecipientCall__Inputs(this);
  }

  get outputs(): SetFeeRecipientCall__Outputs {
    return new SetFeeRecipientCall__Outputs(this);
  }
}

export class SetFeeRecipientCall__Inputs {
  _call: SetFeeRecipientCall;

  constructor(call: SetFeeRecipientCall) {
    this._call = call;
  }

  get feeRecipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeeRecipientCall__Outputs {
  _call: SetFeeRecipientCall;

  constructor(call: SetFeeRecipientCall) {
    this._call = call;
  }
}

export class SetFeesParametersOnPairCall extends ethereum.Call {
  get inputs(): SetFeesParametersOnPairCall__Inputs {
    return new SetFeesParametersOnPairCall__Inputs(this);
  }

  get outputs(): SetFeesParametersOnPairCall__Outputs {
    return new SetFeesParametersOnPairCall__Outputs(this);
  }
}

export class SetFeesParametersOnPairCall__Inputs {
  _call: SetFeesParametersOnPairCall;

  constructor(call: SetFeesParametersOnPairCall) {
    this._call = call;
  }

  get tokenX(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenY(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get binStep(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get baseFactor(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get filterPeriod(): i32 {
    return this._call.inputValues[4].value.toI32();
  }

  get decayPeriod(): i32 {
    return this._call.inputValues[5].value.toI32();
  }

  get reductionFactor(): i32 {
    return this._call.inputValues[6].value.toI32();
  }

  get variableFeeControl(): i32 {
    return this._call.inputValues[7].value.toI32();
  }

  get protocolShare(): i32 {
    return this._call.inputValues[8].value.toI32();
  }

  get maxVolatilityAccumulator(): i32 {
    return this._call.inputValues[9].value.toI32();
  }
}

export class SetFeesParametersOnPairCall__Outputs {
  _call: SetFeesParametersOnPairCall;

  constructor(call: SetFeesParametersOnPairCall) {
    this._call = call;
  }
}

export class SetFlashLoanFeeCall extends ethereum.Call {
  get inputs(): SetFlashLoanFeeCall__Inputs {
    return new SetFlashLoanFeeCall__Inputs(this);
  }

  get outputs(): SetFlashLoanFeeCall__Outputs {
    return new SetFlashLoanFeeCall__Outputs(this);
  }
}

export class SetFlashLoanFeeCall__Inputs {
  _call: SetFlashLoanFeeCall;

  constructor(call: SetFlashLoanFeeCall) {
    this._call = call;
  }

  get flashLoanFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFlashLoanFeeCall__Outputs {
  _call: SetFlashLoanFeeCall;

  constructor(call: SetFlashLoanFeeCall) {
    this._call = call;
  }
}

export class SetLBPairIgnoredCall extends ethereum.Call {
  get inputs(): SetLBPairIgnoredCall__Inputs {
    return new SetLBPairIgnoredCall__Inputs(this);
  }

  get outputs(): SetLBPairIgnoredCall__Outputs {
    return new SetLBPairIgnoredCall__Outputs(this);
  }
}

export class SetLBPairIgnoredCall__Inputs {
  _call: SetLBPairIgnoredCall;

  constructor(call: SetLBPairIgnoredCall) {
    this._call = call;
  }

  get tokenX(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenY(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get binStep(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get ignored(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }
}

export class SetLBPairIgnoredCall__Outputs {
  _call: SetLBPairIgnoredCall;

  constructor(call: SetLBPairIgnoredCall) {
    this._call = call;
  }
}

export class SetLBPairImplementationCall extends ethereum.Call {
  get inputs(): SetLBPairImplementationCall__Inputs {
    return new SetLBPairImplementationCall__Inputs(this);
  }

  get outputs(): SetLBPairImplementationCall__Outputs {
    return new SetLBPairImplementationCall__Outputs(this);
  }
}

export class SetLBPairImplementationCall__Inputs {
  _call: SetLBPairImplementationCall;

  constructor(call: SetLBPairImplementationCall) {
    this._call = call;
  }

  get newLBPairImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetLBPairImplementationCall__Outputs {
  _call: SetLBPairImplementationCall;

  constructor(call: SetLBPairImplementationCall) {
    this._call = call;
  }
}

export class SetPendingOwnerCall extends ethereum.Call {
  get inputs(): SetPendingOwnerCall__Inputs {
    return new SetPendingOwnerCall__Inputs(this);
  }

  get outputs(): SetPendingOwnerCall__Outputs {
    return new SetPendingOwnerCall__Outputs(this);
  }
}

export class SetPendingOwnerCall__Inputs {
  _call: SetPendingOwnerCall;

  constructor(call: SetPendingOwnerCall) {
    this._call = call;
  }

  get pendingOwner_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPendingOwnerCall__Outputs {
  _call: SetPendingOwnerCall;

  constructor(call: SetPendingOwnerCall) {
    this._call = call;
  }
}

export class SetPresetCall extends ethereum.Call {
  get inputs(): SetPresetCall__Inputs {
    return new SetPresetCall__Inputs(this);
  }

  get outputs(): SetPresetCall__Outputs {
    return new SetPresetCall__Outputs(this);
  }
}

export class SetPresetCall__Inputs {
  _call: SetPresetCall;

  constructor(call: SetPresetCall) {
    this._call = call;
  }

  get binStep(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get baseFactor(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get filterPeriod(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get decayPeriod(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get reductionFactor(): i32 {
    return this._call.inputValues[4].value.toI32();
  }

  get variableFeeControl(): i32 {
    return this._call.inputValues[5].value.toI32();
  }

  get protocolShare(): i32 {
    return this._call.inputValues[6].value.toI32();
  }

  get maxVolatilityAccumulator(): i32 {
    return this._call.inputValues[7].value.toI32();
  }

  get isOpen(): boolean {
    return this._call.inputValues[8].value.toBoolean();
  }
}

export class SetPresetCall__Outputs {
  _call: SetPresetCall;

  constructor(call: SetPresetCall) {
    this._call = call;
  }
}

export class SetPresetOpenStateCall extends ethereum.Call {
  get inputs(): SetPresetOpenStateCall__Inputs {
    return new SetPresetOpenStateCall__Inputs(this);
  }

  get outputs(): SetPresetOpenStateCall__Outputs {
    return new SetPresetOpenStateCall__Outputs(this);
  }
}

export class SetPresetOpenStateCall__Inputs {
  _call: SetPresetOpenStateCall;

  constructor(call: SetPresetOpenStateCall) {
    this._call = call;
  }

  get binStep(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get isOpen(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetPresetOpenStateCall__Outputs {
  _call: SetPresetOpenStateCall;

  constructor(call: SetPresetOpenStateCall) {
    this._call = call;
  }
}