import { useQuery } from "@tanstack/react-query";
import { ClothingDetailType, ClothingFilterType } from "../../types";
import { getClothingListApi, getClothingDetailApi } from "../api";
import { query_key } from "@src/services/query/query_key";

export const useClothingList = (filter?: ClothingFilterType) => {
  const getClothingList = async () => {
    const response = await getClothingListApi(filter);
    return response.data;
  };

  return useQuery<ClothingDetailType[]>({
    queryKey: [query_key.CLOTHING_LIST, filter],
    queryFn: getClothingList,
  });
};

export const useSingleClothing = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize: number;
}) => {
  const getClothingDetail = async () => {
    const response = await getClothingDetailApi({ name, thumbsize });
    return response.data;
  };

  return useQuery<ClothingDetailType[]>({
    queryKey: [query_key.CLOTHING_DETAIL, name],
    queryFn: getClothingDetail,
  });
};
