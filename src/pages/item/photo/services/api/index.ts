import { nookRequest } from "@src/services/api";
import { PhotoDetailType } from "../../types";

export const getPhotoListApi = (excludedetails?: boolean) => {
  return nookRequest<PhotoDetailType[]>({
    url: "/nh/photos",
    method: "GET",
    params: { excludedetails },
  });
};

export const getPhotoDetailApi = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  return nookRequest<PhotoDetailType>({
    url: `/nh/photos/${name}`,
    method: "GET",
    params: { thumbsize },
  });
};
