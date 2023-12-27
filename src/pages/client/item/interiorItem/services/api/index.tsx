import { nookRequest } from "@src/common/services/api";
import { InteriorItemDetailType, InteriorItemFilterType } from "../../types";
import { ColorType } from "@src/assets/enum";

export const getInteriorItemListApi = (filter?: InteriorItemFilterType) => {
  return nookRequest<InteriorItemDetailType[]>({
    url: `/nh/interior`,
    method: "GET",
    params: filter,
  });
};

export const getInteriorItemDetailApi = ({
  name,
  color,
  thumbsize,
}: {
  name: string;
  color?: ColorType;
  thumbsize?: number;
}) => {
  return nookRequest<InteriorItemDetailType>({
    url: `/nh/interior/${name}`,
    method: "GET",
    params: { thumbsize, color },
  });
};
