import { useQuery } from "@tanstack/react-query";
import { getVillagerListApi } from "../api";
import { query_key } from "@src/services/query/query_key";

export const useVillagerListQuery = () => {
  const getVillagerList = async () => {
    const response = await getVillagerListApi();
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.VIILAGER_LIST],
    queryFn: getVillagerList,
  });
};
