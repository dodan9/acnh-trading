import { nookRequest } from "@src/services/api";
import { ArtworkFilterType } from "../../types";

export const getArtworkListApi = (filter?: ArtworkFilterType) => {
  return nookRequest({
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
  return nookRequest({
    url: `/nh/art/${name}`,
    method: "GET",
    params: { thumbsize },
  });
};
