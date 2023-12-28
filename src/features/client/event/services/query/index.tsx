import { useQuery } from "@tanstack/react-query";
import { EventFilterType } from "../../types";
import { getEventListApi } from "../api";
import { query_key } from "@src/common/services/query/query_key";

export const useEventList = (filter?: EventFilterType) => {
  const getEventList = async () => {
    const response = await getEventListApi(filter);
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.EVENT_LIST, filter],
    queryFn: getEventList,
  });
};
