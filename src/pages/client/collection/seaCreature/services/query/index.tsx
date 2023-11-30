import { useQuery } from "@tanstack/react-query";
import { query_key } from "@src/services/query/query_key";
import { getSeaCreatureDetailApi, getSeaCreatureListApi } from "../api";
import { SeaCreatureFilterType } from "../../types";

export const useSeaCreatureList = (filter?: SeaCreatureFilterType) => {
  const getSeaCreatureList = async () => {
    const response = await getSeaCreatureListApi(filter);
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.SEA_CREATURE_LIST, filter],
    queryFn: getSeaCreatureList,
  });
};

export const useSeaCreatureDetail = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  const getSeaCreatureDetail = async () => {
    const response = await getSeaCreatureDetailApi({ name, thumbsize });
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.SEA_CREATURE_DETAIL, name],
    queryFn: getSeaCreatureDetail,
  });
};
