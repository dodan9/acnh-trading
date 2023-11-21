import { FurnitureCategory } from "../furniture/types";

export interface InteriorBaseType {
  name: string;
  url: string;
  category: FurnitureCategory;
  item_series: string; // 포함된 시리즈
  item_set: string; // 포함된 세트
  themes: string[]; // 테마
  hha_category: string; // 해피홈 카테고리
  hha_base: number; // 해피홈 점수
  tag: string; // 유형? 분류? ex) 의자, 악기, 마리오
  sell: number;
  grid_width: number; // 가로
  grid_length: number; // 세로
  version_added: string; // 추가된 버전
  unlocked: boolean; // 게임 내 사용 가능 여부
  availability: { from: string; note: string }[]; // 제공 소스
  buy: { price: number; currency: string }[];
  notes: string;
}
