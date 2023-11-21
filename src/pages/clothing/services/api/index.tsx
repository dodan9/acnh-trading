import { nookRequest } from "@src/services/api";
import { ClothingFilterType } from "../../types";

export const getClothingListApi = (filter?: ClothingFilterType) => {
  return nookRequest({
    url: "/nh/clothing",
    method: "GET",
    params: filter,
  });
};

export const getClothingDetailApi = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  return nookRequest({
    url: `/nh/clothing/${name}`,
    method: "GET",
    params: { thumbsize },
  });
};
