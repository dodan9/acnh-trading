import { ColorEnum } from "@src/assets/enum";
import { InteriorBaseType } from "../../types";

export enum FurnitureCategory {
  Housewares = "Housewares", // 가구
  Miscellaneous = "Miscellaneous", // 잡화
  WallMounted = "Wall-mounted", // 벽걸이 가구
}

export interface FurnitureFilterType {
  category?: FurnitureCategory;
  color?: ColorEnum[];
  excludedetails?: boolean;
}

export enum LuckySeason {
  Empty = "",
  AllYear = "All year",
  Spring = "Spring",
  Summer = "Summer",
  Autumn = "Autumn",
  Winter = "Winter",
}

export enum FurnitureFunction {
  Trash = "Trash",
  Toilet = "Toilet",
  Table = "Table",
  Storage = "Storage",
  Stereo = "Stereo",
  Seating = "Seating",
  Lighting = "Lighting",
  Instrument = "Instrument",
  Dresser = "Dresser",
  Bed = "Bed",
  Audio = "Audio",
}

export interface FurnitureDetailType extends InteriorBaseType {
  lucky: boolean; // 행운 아이템 여부, 해피홈에서 777점, lucky_season에만 적용
  lucky_season: string;
  variation_total: number; // 1 ~ 8 가지 종류
  pattern_total: number; // 0 ~ 8 가지 패턴 종류
  customizable: boolean; // 리폼 가능 여부
  custom_kits: number; // 리폼 아이템 필요 수
  custom_kit_type: string; // 리폼 시 필요 아이템, 대부분 리폼 키트
  custom_body_part: string; // 리폼 시 변경 가능 파트
  custom_pattern_part: string; // 리폼 시 패턴 가능 파트
  height: number; // 높이
  door_decor: boolean; // 문 데코 가능 여부
  functions: string[]; // 기능
  variations: {
    variation: string;
    pattern: string;
    image_url: string;
    colors: string[];
  }[];
}
