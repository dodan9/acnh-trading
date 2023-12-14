import { ColorEnum } from "@src/assets/enum";
import { InteriorBaseType } from "../../types";

export enum InteriorItemCategoryEnum {
  Rugs = "Rugs",
  Wallpaper = "Wallpaper",
  Floors = "Floors",
}

export interface InteriorItemFilterType {
  color?: ColorEnum[];
  excludedetails?: boolean;
}

export interface InteriorItemDetailType extends InteriorBaseType {
  image_url: string;
  colors: ColorEnum;
}
