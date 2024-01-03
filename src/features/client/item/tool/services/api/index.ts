import { nookRequest } from "@src/commons/services/api";
import { ToolDetailType } from "../../types";

export const getToolListApi = (excludedetails?: boolean) => {
  return nookRequest<ToolDetailType[]>({
    url: `nh/tools`,
    method: "GET",
    params: { excludedetails },
  });
};

export const getToolDetailsApi = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  return nookRequest<ToolDetailType>({
    url: `nh/tools/${name}`,
    method: "GET",
    params: { thumbsize },
  });
};
