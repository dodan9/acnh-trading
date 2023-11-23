import { create } from "zustand";
import { VillagerFilterType, VillagerGame } from "../types";

interface VillagerFilter {
  filter: VillagerFilterType;
  actions: { setFilter: (filter: VillagerFilterType) => void };
}

const useVillagerKeywordStore = create<VillagerFilter>((set) => ({
  filter: { game: VillagerGame.NewHorizons, nhdetails: true },
  actions: { setFilter: (filter) => set(() => ({ filter })) },
}));

export const useVillagerFilter = () =>
  useVillagerKeywordStore((state) => state.filter);

export const useVillagerFilterAction = () =>
  useVillagerKeywordStore((state) => state.actions);
