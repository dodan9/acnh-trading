import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface State {
  keyword: string;
}
interface Action {
  actions: {
    setKeyword: (keyword: string) => void;
  };
}

const useToolsFilterStore = create<State & Action>()(
  immer((set) => ({
    keyword: "",
    actions: {
      setKeyword: (keyword: string) => set(() => ({ keyword })),
    },
  }))
);

export const useToolsKeyword = () =>
  useToolsFilterStore((state) => state.keyword);

export const useToolsFilterAction = () =>
  useToolsFilterStore((state) => state.actions);
