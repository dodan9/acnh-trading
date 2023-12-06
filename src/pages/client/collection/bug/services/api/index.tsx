import { nookRequest } from "@src/services/api";
import { BugDetailType, BugFilterType } from "../../types";

export const getBugListApi = (filter?: BugFilterType) => {
  if (filter) {
    return nookRequest<{
      north: BugDetailType[];
      south: BugDetailType[];
    }>({
      url: "/nh/bugs",
      method: "GET",
      params: filter,
    });
  } else {
    return nookRequest<BugDetailType[]>({
      url: "/nh/bugs",
      method: "GET",
    });
  }
};

export const getBugDetailApi = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  return nookRequest<BugDetailType>({
    url: `/nh/bugs/${name}`,
    method: "GET",
    params: { thumbsize },
  });
};
