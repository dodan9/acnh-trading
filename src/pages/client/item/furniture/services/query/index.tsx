import { useQuery } from "@tanstack/react-query";
import {
  FurnitureCategory,
  FurnitureDetailType,
  FurnitureFilterType,
} from "../../types";
import { getFurnitureDetailApi, getFurnitureListApi } from "../api";
import { query_key } from "@src/services/query/query_key";

export const useFurnitureList = (filter?: FurnitureFilterType) => {
  const getFurnitureList = async (): Promise<FurnitureDetailType[]> => {
    if (!filter?.category) return [];

    switch (filter.category) {
      case FurnitureCategory.Housewares:
        const { housewares_data } = await import(
          `@src/assets/furniture/housewares.ts`
        );
        return housewares_data;
      case FurnitureCategory.WallMounted:
        const { wall_mounted_data } = await import(
          `@src/assets/furniture/wall-mounted.ts`
        );
        return wall_mounted_data;
      case FurnitureCategory.Miscellaneous:
        const { miscellaneous_data } = await import(
          `@src/assets/furniture/miscellaneaous.ts`
        );
        return miscellaneous_data;
    }
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
