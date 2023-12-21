import { nookRequest } from "@src/common/services/api";
import { BugDetailType, BugFilterType } from "../../types";

export const getBugListApi = (filter?: BugFilterType) => {
  if (filter?.month) {
    return nookRequest<{
      month: string;
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
