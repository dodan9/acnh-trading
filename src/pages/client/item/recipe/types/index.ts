export interface RecipeFilterType {
  material: string; // 해당 재료를 사용하는 레시피
  excludedetails: string;
  thumbsize: number;
}

export interface RecipeDetailType {
  name: string;
  url: string;
  image_url: string;
  serial_id: number;
  buy: { price: number; currency: string }[];
  sell: number;
  recipes_to_unlock: number; // 이 레시피를 잠금 해제하려면 플레이어가 배워야 하는 레시피의 수입니다.
  availability: [{ from: string; note?: string }];
  materials: { name: string; count: number }[];
}
