import { useQuery } from "@tanstack/react-query";
import { query_key } from "@src/common/services/query/query_key";
import { getSeaCreatureDetailApi, getSeaCreatureListApi } from "../api";
import { useSeaCreatureFilter } from "../../store/seaCreatureFilter";

export const useSeaCreatureList = () => {
  const filter = useSeaCreatureFilter();

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
  name?: string;
  thumbsize?: number;
}) => {
  const getSeaCreatureDetail = async () => {
    if (!name) return false;

    const response = await getSeaCreatureDetailApi({ name, thumbsize });
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.SEA_CREATURE_DETAIL, name],
    queryFn: getSeaCreatureDetail,
  });
};
