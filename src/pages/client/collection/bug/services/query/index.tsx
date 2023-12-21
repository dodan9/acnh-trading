import { useQuery } from "@tanstack/react-query";
import { getBugDetailApi, getBugListApi } from "../api";
import { query_key } from "@src/common/services/query/query_key";
import { useBugFilter } from "../../store/bugFilter";

export const useBugList = () => {
  const filter = useBugFilter();

  const getBugList = async () => {
    const response = await getBugListApi(filter);
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.BUG_LIST, filter],
    queryFn: getBugList,
  });
};

export const useBugDetail = ({
  name,
  thumbsize,
}: {
  name?: string;
  thumbsize?: number;
}) => {
  const getBugDetail = async () => {
    if (!name) return false;
    const response = await getBugDetailApi({ name, thumbsize });
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.BUG_DETAIL, name],
    queryFn: getBugDetail,
  });
};
