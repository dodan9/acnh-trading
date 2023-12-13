import { create } from "zustand";
import { FishFilterType } from "../types";

interface State {
  filter: FishFilterType;
}
interface Action {
  actions: { setMonth: (month: number) => void };
}

const useFishFilterStore = create<State & Action>((set) => ({
  filter: {},
  actions: {
    setMonth: (month) =>
      set((state) => {
        return { filter: { ...state.filter, month: String(month) } };
      }),
  },
}));

export const useFishFilter = () => useFishFilterStore((state) => state.filter);

export const useFishFilterAction = () =>
  useFishFilterStore((state) => state.actions);
