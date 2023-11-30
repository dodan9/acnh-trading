import { useQuery } from "@tanstack/react-query";
import { getVillagerListApi } from "../api";
import { query_key } from "@src/services/query/query_key";
import { VillagerFilterType } from "../../types";

export const useVillagerListQuery = (filter?: VillagerFilterType) => {
  const getVillagerList = async () => {
    const response = await getVillagerListApi(filter);
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.VIILAGER_LIST, filter],
    queryFn: getVillagerList,
  });
};
