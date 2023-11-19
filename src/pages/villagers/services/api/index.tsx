import { nookRequest } from "@src/services/api";
import { VillagerFilter } from "../query";

export const getVillagerListApi = (filter?: VillagerFilter) => {
  return nookRequest({
    url: "/villagers",
    method: "GET",
    params: filter,
  });
};
