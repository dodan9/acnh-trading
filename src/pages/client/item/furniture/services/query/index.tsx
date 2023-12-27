import { useQuery } from "@tanstack/react-query";
import {
  FurnitureCategory,
  FurnitureDetailType,
  FurnitureFilterType,
} from "../../types";
import { getFurnitureDetailApi, getFurnitureListApi } from "../api";
import { query_key } from "@src/common/services/query/query_key";
import { useFurnitureFilter } from "../../store/furnitureFilter";
import { ColorType } from "@src/assets/enum";

export const useFurnitureList = () => {
  const filter = useFurnitureFilter();

  const getFurnitureList = async (): Promise<FurnitureDetailType[]> => {
    if (!filter?.category) return [];
    let furniture_data: FurnitureDetailType[] = [];

    switch (filter.category) {
      case FurnitureCategory.Housewares:
        const { housewares_data } = await import(
          `@src/assets/furniture/housewares.ts`
        );
        furniture_data = housewares_data;
        break;

      case FurnitureCategory.WallMounted:
        const { wall_mounted_data } = await import(
          `@src/assets/furniture/wall-mounted.ts`
        );
        furniture_data = wall_mounted_data;
        break;

      case FurnitureCategory.Miscellaneous:
        const { miscellaneous_data } = await import(
          `@src/assets/furniture/miscellaneaous.ts`
        );
        furniture_data = miscellaneous_data;
        break;
      case FurnitureCategory.CeilingDecor:
        const { ceiling_decor_data } = await import(
          `@src/assets/furniture/ceiling-decor.ts`
        );
        furniture_data = ceiling_decor_data;
        break;
    }

    if (filter.color?.length) {
      furniture_data = furniture_data.filter((furniture) => {
        return furniture.variations.some((variation) =>
          variation.colors.some((color) =>
            filter.color?.includes(color as ColorType)
          )
        );
      });
    }
    return furniture_data;
  };

  return useQuery<FurnitureDetailType[]>({
    queryKey: [query_key.FURNITURE_LIST, filter],
    queryFn: getFurnitureList,
  });
};

export const useFurnitureNameList = (filter?: FurnitureFilterType) => {
  const getFurnitureList = async () => {
    const response = await getFurnitureListApi({
      ...filter,
      excludedetails: true,
    });
    return response.data;
  };

  return useQuery<FurnitureDetailType[]>({
    queryKey: [query_key.FURNITURE_LIST, filter],
    queryFn: getFurnitureList,
  });
};

export const useFurnitureDetail = ({
  name,
  thumbsize,
}: {
  name?: string;
  thumbsize?: number;
}) => {
  const getFurnitureDetail = async () => {
    if (!name) return false;
    const response = await getFurnitureDetailApi({ name, thumbsize });
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.FURNITURE_DETAIL, name],
    queryFn: getFurnitureDetail,
  });
};
