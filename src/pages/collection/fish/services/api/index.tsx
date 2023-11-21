import { nookRequest } from "@src/services/api";
import { FishFilterType } from "../../types";

export const getFishListApi = (filter?: FishFilterType) => {
  return nookRequest({
    url: `/nh/fish`,
    method: "GET",
    params: filter,
  });
};

export const getFishDetailApi = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  return nookRequest({
    url: `/nh/fish/${name}`,
    method: "GET",
    params: { thumbsize },
  });
};
