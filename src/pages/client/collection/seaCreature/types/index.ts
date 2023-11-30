import { CreatureDetailType, CreatureFilterType } from "../../types/creature";

export interface SeaCreatureFilterType extends CreatureFilterType {}

export enum SeaCreatureShadow {
  X_SMALL = "X-Small",
  SMALL = "Small",
  MEDIUM = "Medium",
  LARGE = "Large",
  X_LARGE = "X-Large",
}

export enum SeaCreatureMovement {
  STATIONARY = "Stationary",
  VERY_SLOW = "Very slow",
  SLOW = "Slow",
  MEDIUM = "Medium",
  FAST = "Fast",
  VERY_FAST = "Very fast",
}

export interface SeaCreatureDetailType extends CreatureDetailType {
  shadow_size: SeaCreatureShadow;
  shadow_movement: SeaCreatureMovement;
}
