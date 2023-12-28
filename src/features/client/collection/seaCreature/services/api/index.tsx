import { nookRequest } from "@src/common/services/api";
import { SeaCreatureDetailType, SeaCreatureFilterType } from "../../types";

export const getSeaCreatureListApi = (filter?: SeaCreatureFilterType) => {
  if (filter?.month) {
    return nookRequest<{
      month: string;
      south: SeaCreatureDetailType[];
      north: SeaCreatureDetailType[];
    }>({
      url: `/nh/sea`,
      method: "GET",
      params: filter,
    });
  } else {
    return nookRequest<SeaCreatureDetailType[]>({
      url: `/nh/sea`,
      method: "GET",
      params: filter,
    });
  }
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
