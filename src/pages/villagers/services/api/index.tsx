import { nookRequest } from "@src/services/api";

export const getVillagerListApi = () => {
  return nookRequest({
    url: "/villagers",
    method: "GET",
  });
};
