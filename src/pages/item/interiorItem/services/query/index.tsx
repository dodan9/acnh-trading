import { useQuery } from "@tanstack/react-query";
import { query_key } from "@src/services/query/query_key";
import { InteriorItemFilterType } from "../../types";
import { getInteriorItemDetailApi, getInteriorItemListApi } from "../api";
import { ColorEnum } from "@src/assets/enum";

export const useInteriorItemList = (filter?: InteriorItemFilterType) => {
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
  name: string;
  color: ColorEnum;
  thumbsize: number;
}) => {
  const getInteriorItemDetail = async () => {
    const response = await getInteriorItemDetailApi({ name, thumbsize, color });
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.INTERIORITEM_DETAIL, name, color],
    queryFn: getInteriorItemDetail,
  });
};
