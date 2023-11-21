export enum MaterialTypeEnum {
  Empty = "",
  Bamboo = "Bamboo",
  Mushroom = "Mushroom",
  Trash = "Trash",
  Wood = "Wood",
  Ore = "Ore",
  Snowflake = "Snowflake",
  Tree = "Tree",
  Ornament = "Ornament",
  Fruit = "Fruit",
  Underwater = "Underwater",
  Other = "Other",
  Leaf = "Leaf",
  Shell = "Shell",
  Flower = "Flower",
  StarFragment = "Star Fragment",
  Feather = "Feather",
  Egg = "Egg",
  Plant = "Plant",
}

export enum PlantTypeEnum {
  Empty = "",
  Pumpkin = "Pumpkin",
  Flower = "Flower",
  Bush = "Bush",
  Tree = "Tree",
}

export interface MiscellaneousDetailType {
  name: string;
  url: string;
  image_url: string;
  stack: number;
  hha_base: number;
  sell: number;
  is_fence: boolean; // 울타리인지 아닌지
  material_type: MaterialTypeEnum;
  material_seasonality: string;
  material_sort: number;
  material_name_sort: number;
  material_seasonality_sort: number;
  edible: boolean; // 음식인지 아닌지
  plant_type: PlantTypeEnum;
  version_added: string;
  unlocked: boolean;
  notes: string;
  availability: { from: string; note: string }[];
  buy: { price: number; currency: string }[];
}
