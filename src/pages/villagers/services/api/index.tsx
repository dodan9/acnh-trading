import { nookRequest } from "@src/services/api";
import { Villager, VillagerFilter } from "../../types";

export const getVillagerListApi = (filter?: VillagerFilter) => {
  return nookRequest<Villager[]>({
    url: "/villagers",
    method: "GET",
    params: filter,
  });
};
