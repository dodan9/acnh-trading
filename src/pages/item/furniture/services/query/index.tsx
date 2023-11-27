import { useQuery } from "@tanstack/react-query";
import { FurnitureDetailType, FurnitureFilterType } from "../../types";
import { getFurnitureDetailApi, getFurnitureListApi } from "../api";
import { query_key } from "@src/services/query/query_key";

export const useFurnitureList = (filter?: FurnitureFilterType) => {
  const getFurnitureList = async () => {
    const response = await getFurnitureListApi(filter);
    return response.data;
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
  name: string;
  thumbsize: number;
}) => {
  const getFurnitureDetail = async () => {
    const response = await getFurnitureDetailApi({ name, thumbsize });
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.FURNITURE_DETAIL, name],
    queryFn: getFurnitureDetail,
  });
};
