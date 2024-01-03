import { create } from "zustand";
import { BugFilterType } from "../types";

interface State {
  filter: BugFilterType;
}
interface Action {
  actions: { setMonth: (month: number) => void };
}

const useBugFilterStore = create<State & Action>((set) => ({
  filter: {},
  actions: {
    setMonth: (month) =>
      set((state) => {
        return { filter: { ...state.filter, month: String(month) } };
      }),
  },
}));

export const useBugFilter = () => useBugFilterStore((state) => state.filter);

export const useBugFilterAction = () =>
  useBugFilterStore((state) => state.actions);
