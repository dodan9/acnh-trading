import { create } from "zustand";

interface State {
  keyword: string;
}
interface Action {
  actions: { setKeyword: (keyword: string) => void };
}

const useVillagerKeywordStore = create<State & Action>((set) => ({
  keyword: "",
  actions: { setKeyword: (keyword: string) => set(() => ({ keyword })) },
}));

export const useVillagerKeyword = () =>
  useVillagerKeywordStore((state) => state.keyword);
export const useVillagerKeywordAction = () =>
  useVillagerKeywordStore((state) => state.actions);
