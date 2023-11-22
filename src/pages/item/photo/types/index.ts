import { ColorEnum } from "@src/assets/enum";

export enum PhotoTypeEnum {
  Photos = "Photos",
  Posters = "Posters",
}

export interface PhotoDetailType {
  name: string;
  url: string;
  category: PhotoTypeEnum;
  sell: number;
  customizable: boolean;
  custom_kits: number;
  custom_body_part: string;
  interactable: boolean; // 상호작용 여부, 모든 액자: true, 모든 포스터: false
  version_added: string;
  unlocked: boolean;
  grid_width: number;
  grid_length: number;
  availability: { from: string; note: string }[];
  buy: { price: number; currency: string }[];
  variations: { variation: string; image_url: string; colors: ColorEnum[] }[];
}
