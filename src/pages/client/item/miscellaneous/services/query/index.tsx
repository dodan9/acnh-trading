import { useQuery } from "@tanstack/react-query";
import { query_key } from "@src/services/query/query_key";
import { getMiscellaneousDetailApi, getMiscellaneousListApi } from "../api";

export const useMiscellaneousList = (excludedetails?: boolean) => {
  const getMiscellaneousList = async () => {
    const response = await getMiscellaneousListApi(excludedetails);
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.MISCELLANEOUS_LIST, excludedetails],
    queryFn: getMiscellaneousList,
  });
};

export const useMiscellaneousDetail = ({
  name,
  thumbsize,
}: {
  name?: string;
  thumbsize?: number;
}) => {
  const getMiscellaneousDetail = async () => {
    if (!name) return false;
    const response = await getMiscellaneousDetailApi({
      name,
      thumbsize,
    });
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.MISCELLANEOUS_DETAIL, name],
    queryFn: getMiscellaneousDetail,
  });
};
