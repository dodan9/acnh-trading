import { create } from "zustand";

interface State {
  name: string;
}
interface Action {
  actions: { setName: (name: string) => void };
}

const useVillagerKeywordStore = create<State & Action>((set) => ({
  name: "",
  actions: { setName: (name: string) => set(() => ({ name })) },
}));

export const useVillagerName = () =>
  useVillagerKeywordStore((state) => state.name);
export const useVillagerNameAction = () =>
  useVillagerKeywordStore((state) => state.actions);
