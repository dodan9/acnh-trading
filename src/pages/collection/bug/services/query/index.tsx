import { useQuery } from "@tanstack/react-query";
import { BugDetailType, BugFilterType } from "../../types";
import { getBugDetailApi, getBugListApi } from "../api";
import { query_key } from "@src/services/query/query_key";

export const useBugList = (filter?: BugFilterType) => {
  const getBugList = async () => {
    const response = await getBugListApi(filter);
    return response.data;
  };

  return useQuery<BugDetailType[]>({
    queryKey: [query_key.BUG_LIST, filter],
    queryFn: getBugList,
  });
};

export const useBugDetail = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  const getBugDetail = async () => {
    const response = await getBugDetailApi({ name, thumbsize });
    return response.data;
  };

  return useQuery<BugDetailType>({
    queryKey: [query_key.BUG_DETAIL, name],
    queryFn: getBugDetail,
  });
};
