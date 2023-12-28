import { nookRequest } from "@src/common/services/api";
import { VillagerDetailType, VillagerFilterType } from "../../types";

export const getVillagerListApi = (filter?: VillagerFilterType) => {
  return nookRequest<VillagerDetailType[]>({
    url: "/villagers",
    method: "GET",
    params: filter,
  });
};
