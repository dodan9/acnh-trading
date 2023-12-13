import { useQuery } from "@tanstack/react-query";
import { query_key } from "@src/services/query/query_key";
import { getFishDetailApi, getFishListApi } from "../api";
import { useFishFilter } from "../../store/fishFilter";

export const useFishList = () => {
  const filter = useFishFilter();

  const getFishList = async () => {
    const response = await getFishListApi(filter);
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.FISH_LIST, filter],
    queryFn: getFishList,
  });
};

export const useFishDetail = ({
  name,
  thumbsize,
}: {
  name?: string;
  thumbsize?: number;
}) => {
  const getFishDetail = async () => {
    if (!name) return false;
    const response = await getFishDetailApi({ name, thumbsize });
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.FISH_DETAIL, name],
    queryFn: getFishDetail,
  });
};
