import { useQuery } from "@tanstack/react-query";
import { getVillagerListApi } from "../api";
import { query_key } from "@src/services/query/query_key";
import { useVillagerFilter } from "../../store/filter";
import { VillagerFilterType } from "../../types";

export const useVillagerListQuery = (query?: VillagerFilterType) => {
  const filter = useVillagerFilter();

  const getVillagerList = async () => {
    const response = await getVillagerListApi({ ...filter, ...query });
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.VIILAGER_LIST, filter],
    queryFn: getVillagerList,
  });
};
