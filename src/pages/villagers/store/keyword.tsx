import { create } from "zustand";
import { shallow } from "zustand/shallow";

interface VillagerKeyword {
  name: string;
  actions: { setName: (name: string) => void };
}

const useVillagerKeywordStore = create<VillagerKeyword>((set) => ({
  name: "",
  actions: { setName: (name: string) => set(() => ({ name })) },
}));

export const useVillagerName = () =>
  useVillagerKeywordStore((state) => state.name, shallow);
export const useVillagerNameAction = () =>
  useVillagerKeywordStore((state) => state.actions);
