import { nookRequest } from "@src/services/api";
import { SeaCreatureDetailType, SeaCreatureFilterType } from "../../types";

export const getSeaCreatureListApi = (filter?: SeaCreatureFilterType) => {
  return nookRequest<SeaCreatureDetailType[]>({
    url: `/nh/sea`,
    method: "GET",
    params: filter,
  });
};

export const getSeaCreatureDetailApi = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  return nookRequest<SeaCreatureDetailType>({
    url: `/nh/sea/${name}`,
    method: "GET",
    params: { thumbsize },
  });
};
