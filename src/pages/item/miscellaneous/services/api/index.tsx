import { nookRequest } from "@src/services/api";
import { MiscellaneousDetailType } from "../../types";

export const getMiscellaneousListApi = (excludedetails?: boolean) => {
  return nookRequest<MiscellaneousDetailType[]>({
    url: `/nh/items`,
    method: "GET",
    params: { excludedetails },
  });
};

export const getMiscellaneousDetailApi = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize: number;
}) => {
  return nookRequest<MiscellaneousDetailType>({
    url: `/nh/items/${name}`,
    method: "GET",
    params: { thumbsize },
  });
};
