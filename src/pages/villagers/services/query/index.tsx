import { useQuery } from "@tanstack/react-query";
import { getVillagerListApi } from "../api";
import { query_key } from "@src/services/query/query_key";
import {
  Villager,
  VillagerDebut,
  VillagerPersonality,
  VillagerSpecies,
} from "../../types";

export interface VillagerFilter {
  name?: string; // 주민 이름
  species?: VillagerSpecies; // 주민 종
  personality?: VillagerPersonality; // 주민 성격
  game?: VillagerDebut[];
  birthmonth?: string; // 생일 월
  birthday?: string; // 생일 일
  nhdetails?: boolean; // nh_details가 있는 주민들 반환 여부
  excludedetails?: boolean; // 이름만 반환할지 여부
  thumbsize?: number; // 원하는 이미지 사이즈 여부
}

export const useVillagerListQuery = (filter?: VillagerFilter) => {
  const getVillagerList = async () => {
    const response = await getVillagerListApi(filter);
    return response.data;
  };

  return useQuery<Villager[]>({
    queryKey: [query_key.VIILAGER_LIST, filter],
    queryFn: getVillagerList,
  });
};
