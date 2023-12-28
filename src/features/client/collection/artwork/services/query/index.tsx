import { useQuery } from "@tanstack/react-query";
import { ArtworkFilterType } from "../../types";
import { getArtworkDetailApi, getArtworkListApi } from "../api";
import { query_key } from "@src/common/services/query/query_key";

export const useArtworkList = (filter?: ArtworkFilterType) => {
  const getArtworkList = async () => {
    const response = await getArtworkListApi(filter);
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.ARTWORK_LIST, filter],
    queryFn: getArtworkList,
  });
};

export const useArtworkDetail = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  const getArtworkDetail = async () => {
    const response = await getArtworkDetailApi({ name, thumbsize });
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.ARTWORK_DETAIL, name],
    queryFn: getArtworkDetail,
  });
};
