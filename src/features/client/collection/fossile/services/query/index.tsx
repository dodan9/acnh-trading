import { useQuery } from "@tanstack/react-query";
import {
  getFossilDetailApi,
  getFossilGroupDetailApi,
  getFossilGroupInfoDetailApi,
  getFossilGroupInfoListApi,
  getFossilGroupListApi,
  getFossilListApi,
} from "../api";
import { query_key } from "@src/commons/services/query/query_key";

export const useFossilList = (thumbsize?: number) => {
  const getFossilList = async () => {
    const response = await getFossilListApi(thumbsize);
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.FOSSIL_LIST],
    queryFn: getFossilList,
  });
};

export const useFossilDetail = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  const getFossilDetail = async () => {
    const response = await getFossilDetailApi({ name, thumbsize });
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.FOSSIL_DETAIL],
    queryFn: getFossilDetail,
  });
};

export const useFossilGroupList = (thumbsize?: number) => {
  const getFossilGroupList = async () => {
    const response = await getFossilGroupListApi(thumbsize);
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.FOSSIL_LIST],
    queryFn: getFossilGroupList,
  });
};

export const useFossilGroupDetail = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  const getFossilGroupDetail = async () => {
    const response = await getFossilGroupDetailApi({ name, thumbsize });
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.FOSSIL_DETAIL],
    queryFn: getFossilGroupDetail,
  });
};

export const useFossilGroupInfoList = (thumbsize?: number) => {
  const getFossilGroupInfoList = async () => {
    const response = await getFossilGroupInfoListApi(thumbsize);
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.FOSSIL_LIST],
    queryFn: getFossilGroupInfoList,
  });
};

export const useFossilGroupInfoDetail = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  const getFossilGroupInfoDetail = async () => {
    const response = await getFossilGroupInfoDetailApi({ name, thumbsize });
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.FOSSIL_DETAIL],
    queryFn: getFossilGroupInfoDetail,
  });
};
