import { nookRequest } from "@src/common/services/api";
import {
  FossilDetailType,
  FossilGroupInfoDetailType,
  FossilGroupInfoType,
  FossilGroupType,
} from "../../types";

export const getFossilListApi = (thumbsize?: number) => {
  return nookRequest<FossilDetailType[]>({
    url: `/nh/fossils/individuals`,
    method: "GET",
    params: { thumbsize },
  });
};

export const getFossilDetailApi = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  return nookRequest<FossilDetailType>({
    url: `/nh/fossils/individuals/${name}`,
    method: "GET",
    params: { thumbsize },
  });
};

export const getFossilGroupListApi = (thumbsize?: number) => {
  return nookRequest<FossilGroupType[]>({
    url: `/nh/fossils/groups`,
    method: "GET",
    params: { thumbsize },
  });
};

export const getFossilGroupDetailApi = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  return nookRequest<FossilGroupType>({
    url: `/nh/fossils/groups/${name}`,
    method: "GET",
    params: { thumbsize },
  });
};

export const getFossilGroupInfoListApi = (thumbsize?: number) => {
  return nookRequest<FossilGroupInfoType[]>({
    url: `/nh/fossils/all`,
    method: "GET",
    params: { thumbsize },
  });
};

export const getFossilGroupInfoDetailApi = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  return nookRequest<FossilGroupInfoDetailType>({
    url: `/nh/fossils/all/${name}`,
    method: "GET",
    params: { thumbsize },
  });
};
