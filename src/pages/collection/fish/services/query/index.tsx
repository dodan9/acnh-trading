import { useQuery } from "@tanstack/react-query";
import { query_key } from "@src/services/query/query_key";
import { FishDetailType, FishFilterType } from "../../types";
import { getFishDetailApi, getFishListApi } from "../api";

export const useFishList = (filter?: FishFilterType) => {
  const getFishList = async () => {
    const response = await getFishListApi(filter);
    return response.data;
  };

  return useQuery<FishDetailType[]>({
    queryKey: [query_key.FISH_LIST, filter],
    queryFn: getFishList,
  });
};

export const useFishDetail = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  const getFishDetail = async () => {
    const response = await getFishDetailApi({ name, thumbsize });
    return response.data;
  };

  return useQuery<FishDetailType>({
    queryKey: [query_key.FISH_DETAIL, name],
    queryFn: getFishDetail,
  });
};
