import { nookRequest } from "@src/common/services/api";
import { FurnitureDetailType, FurnitureFilterType } from "../../types";

export const getFurnitureListApi = (filter?: FurnitureFilterType) => {
  return nookRequest({
    url: `/nh/furniture`,
    method: "GET",
    params: filter,
  });
};

export const getFurnitureDetailApi = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  return nookRequest<FurnitureDetailType>({
    url: `/nh/furniture/${name}`,
    method: "GET",
    params: { thumbsize },
  });
};
