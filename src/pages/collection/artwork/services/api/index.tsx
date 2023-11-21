import { nookRequest } from "@src/services/api";
import { ArtworkDetailType, ArtworkFilterType } from "../../types";

export const getArtworkListApi = (filter?: ArtworkFilterType) => {
  return nookRequest<ArtworkDetailType[]>({
    url: "/nh/art",
    method: "GET",
    params: filter,
  });
};

export const getArtworkDetailApi = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  return nookRequest<ArtworkDetailType>({
    url: `/nh/art/${name}`,
    method: "GET",
    params: { thumbsize },
  });
};
