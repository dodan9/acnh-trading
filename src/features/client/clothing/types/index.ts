import { ColorType } from "@src/assets/enum";

export enum ClothingCategory {
  Tops = "Tops",
  Bottoms = "Bottoms",
  DressUp = "Dress-up",
  Headwear = "Headwear",
  Accessories = "Accessories",
  Socks = "Socks",
  Shoes = "Shoes",
  Bags = "Bags",
  Umbrellas = "Umbrellas",
}

export enum ClothingStyle {
  Active = "Active",
  Cool = "Cool",
  Cute = "Cute",
  Elegant = "Elegant",
  Gorgeous = "Gorgeous",
  Simple = "Simple",
}

export enum ClothingLabelTheme {
  Comfy = "Comfy",
  Everyday = "Everyday",
  FairyTale = "Fairy tale",
  Formal = "Formal",
  Goth = "Goth",
  Outdoorsy = "Outdoorsy",
  Party = "Party",
  Sporty = "Sporty",
  Theatrical = "Theatrical",
  Vacation = "Vacation",
  Work = "Work",
}

export interface ClothingFilterType {
  category?: ClothingCategory;
  color?: ColorType[];
  style?: ClothingStyle[];
  labeltheme?: ClothingLabelTheme;
  excludedetails?: boolean; // 상세 정보 제외(이름만 반환)
}

export interface ClothingDetailType {
  name: string;
  url: string;
  category: ClothingCategory;
  sell: number; // 팔 수 있는 가격
  variation_total: number; // 종류 수, 0 ~ 8개
  vill_equip: boolean; // 주민 장착 가능 여부
  seasonality: string; // 착용 가능 계절?
  version_added: string; // 추가된 버전
  unlocked: boolean; // 인게임 내 사용 가능 여부
  notes: string; // 과거 정보?
  label_themes: string[];
  styles: string[];
  availability: { from: string; note?: string }[]; // 획득처, 추가 정보
  buy: { price: number; currency: string }[]; // 구매 가격
  variations: {
    variation: string;
    image_url: string;
    colors: [ColorType, ColorType?];
  }[];
}
