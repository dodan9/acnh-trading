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

const useMiscellaneousFilterStore = create<State & Action>()(
  immer((set) => ({
    keyword: "",
    actions: {
      setKeyword: (keyword: string) => set(() => ({ keyword })),
    },
  }))
);

export const useMiscellaneousKeyword = () =>
  useMiscellaneousFilterStore((state) => state.keyword);

export const useMiscellaneousFilterAction = () =>
  useMiscellaneousFilterStore((state) => state.actions);
