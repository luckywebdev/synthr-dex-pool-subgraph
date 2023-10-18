import { LBPairCreated as LBPairCreatedV21 } from "../../generated/LBFactoryV21/LBFactoryV21";
import { LBPairV21 } from "../../generated/schema";
import { SYETH_ETH_PAIR } from "./constants/index";
import { loadToken } from "./entities";

export function handleLBPairCreatedV21(event: LBPairCreatedV21): void {
  const lbPair = new LBPairV21(event.params.LBPair.toHexString());
  if (lbPair.id != SYETH_ETH_PAIR) {
    return
  }
  const tokenX = loadToken(event.params.tokenX);
  const tokenY = loadToken(event.params.tokenY);

  lbPair.tokenX = tokenX.id;
  lbPair.tokenY = tokenY.id;
  lbPair.binStep = event.params.binStep;

  lbPair.save();
}
