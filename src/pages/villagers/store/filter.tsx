import { create } from "zustand";
import { VillagerFilterType, VillagerGame } from "../types";

interface State {
  filter: VillagerFilterType;
}
interface Action {
  actions: { setFilter: (filter: VillagerFilterType) => void };
}

const useVillagerKeywordStore = create<State & Action>((set) => ({
  filter: { game: VillagerGame.NewHorizons, nhdetails: true },
  actions: { setFilter: (filter) => set(() => ({ filter })) },
}));

export const useVillagerFilter = () =>
  useVillagerKeywordStore((state) => state.filter);

export const useVillagerFilterAction = () =>
  useVillagerKeywordStore((state) => state.actions);
