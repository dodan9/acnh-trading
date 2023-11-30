import { nookRequest } from "@src/services/api";
import { ClothingDetailType, ClothingFilterType } from "../../types";

export const getClothingListApi = (filter?: ClothingFilterType) => {
  return nookRequest<ClothingDetailType[]>({
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
  return nookRequest<ClothingDetailType>({
    url: `/nh/clothing/${name}`,
    method: "GET",
    params: { thumbsize },
  });
};
