import { useQuery } from "@tanstack/react-query";
import { getToolDetailsApi, getToolListApi } from "../api";
import { query_key } from "@src/services/query/query_key";

export const useToolListQuery = (excludedetails?: boolean) => {
  const getToolList = async () => {
    const response = await getToolListApi(excludedetails);
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.TOOL_LIST, excludedetails],
    queryFn: getToolList,
  });
};

export const useToolDetailQuery = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  const getToolDetail = async () => {
    const response = await getToolDetailsApi({ name, thumbsize });
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.TOOL_LIST, name],
    queryFn: getToolDetail,
  });
};
