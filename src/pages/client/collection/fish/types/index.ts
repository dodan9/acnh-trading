import { CreatureDetailType, CreatureFilterType } from "../../types/creature";

export interface FishFilterType extends CreatureFilterType {}

export enum FishShadowSize {
  XSmall = "X-Small",
  Small = "Small",
  Medium = "Medium",
  MediumWithFin = "Medium w/Fin",
  Large = "Large",
  LargeWithFin = "Large w/Fin",
  XLarge = "X-Large",
  XXLarge = "XX-Large",
  Long = "Long",
}

export interface FishDetailType extends CreatureDetailType {
  shadow_size: string;
  sell_cj: number;
}
