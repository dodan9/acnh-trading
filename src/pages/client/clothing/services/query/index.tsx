import { useQuery } from "@tanstack/react-query";
import { ClothingFilterType } from "../../types";
import { getClothingListApi, getClothingDetailApi } from "../api";
import { query_key } from "@src/services/query/query_key";

export const useClothingList = (filter?: ClothingFilterType) => {
  const getClothingList = async () => {
    const response = await getClothingListApi(filter);
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.CLOTHING_LIST, filter],
    queryFn: getClothingList,
  });
};

export const useClothingDetail = ({
  name,
  thumbsize,
}: {
  name?: string;
  thumbsize?: number;
}) => {
  const getClothingDetail = async () => {
    if (!name) return;
    false;
    const response = await getClothingDetailApi({ name, thumbsize });
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.CLOTHING_DETAIL, name],
    queryFn: getClothingDetail,
    enabled: !!name,
  });
};
