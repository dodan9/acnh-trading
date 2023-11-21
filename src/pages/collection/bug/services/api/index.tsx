import { nookRequest } from "@src/services/api";
import { BugFilterType } from "../../types";

export const getBugListApi = (filter?: BugFilterType) => {
  return nookRequest({
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
  return nookRequest({
    url: `/nh/bugs/${name}`,
    method: "GET",
    params: { thumbsize },
  });
};
