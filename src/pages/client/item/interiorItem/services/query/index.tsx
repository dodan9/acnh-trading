import { useQuery } from "@tanstack/react-query";
import { query_key } from "@src/common/services/query/query_key";
import { getInteriorItemDetailApi, getInteriorItemListApi } from "../api";
import { ColorEnum } from "@src/assets/enum";
import { useInteriorItemFilter } from "../../store/interiorItemFilter";

export const useInteriorItemList = () => {
  const filter = useInteriorItemFilter();

  const getInteriorItemList = async () => {
    const response = await getInteriorItemListApi(filter);
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.INTERIORITEM_LIST, filter],
    queryFn: getInteriorItemList,
  });
};

export const useInteriorItemDetail = ({
  name,
  color,
  thumbsize,
}: {
  name?: string;
  color?: ColorEnum;
  thumbsize?: number;
}) => {
  const getInteriorItemDetail = async () => {
    if (!name) return false;
    const response = await getInteriorItemDetailApi({ name, thumbsize, color });
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.INTERIORITEM_DETAIL, name, color],
    queryFn: getInteriorItemDetail,
  });
};
