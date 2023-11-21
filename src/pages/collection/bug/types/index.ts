import { CreatureDetailType, CreatureFilterType } from "../../types/creature";

export interface BugFilterType extends CreatureFilterType {}

export interface BugDetailType extends CreatureDetailType {
  sell_flick: number;
}
