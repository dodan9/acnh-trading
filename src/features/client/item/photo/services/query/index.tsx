import { useQuery } from "@tanstack/react-query";
import { getPhotoDetailApi, getPhotoListApi } from "../api";
import { query_key } from "@src/common/services/query/query_key";

export const usePhotoList = (excludedetails?: boolean) => {
  const getPhotoList = async () => {
    const response = await getPhotoListApi(excludedetails);
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.PHOTO_LIST],
    queryFn: getPhotoList,
  });
};

export const usePhotoDetail = ({
  name,
  thumbsize,
}: {
  name?: string;
  thumbsize?: number;
}) => {
  const getPhotoDetail = async () => {
    if (!name) return false;
    const response = await getPhotoDetailApi({ name, thumbsize });
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.PHOTO_LIST, name],
    queryFn: getPhotoDetail,
    enabled: !!name,
  });
};
