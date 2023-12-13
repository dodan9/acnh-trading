import { nookRequest } from "@src/services/api";
import { FishDetailType, FishFilterType } from "../../types";

export const getFishListApi = (filter?: FishFilterType) => {
  if (filter?.month) {
    return nookRequest<{
      month: string;
      north: FishDetailType[];
      south: FishDetailType[];
    }>({
      url: "/nh/fish",
      method: "GET",
      params: filter,
    });
  } else {
    return nookRequest<FishDetailType[]>({
      url: `/nh/fish`,
      method: "GET",
      params: filter,
    });
  }
};

export const getFishDetailApi = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  return nookRequest<FishDetailType>({
    url: `/nh/fish/${name}`,
    method: "GET",
    params: { thumbsize },
  });
};
