import { nookRequest } from "@src/services/api";
import { BugDetailType, BugFilterType } from "../../types";

export const getBugListApi = (filter?: BugFilterType) => {
  return nookRequest<BugDetailType[]>({
    url: `/nh/bugs`,
    method: "GET",
    params: filter,
  });
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
