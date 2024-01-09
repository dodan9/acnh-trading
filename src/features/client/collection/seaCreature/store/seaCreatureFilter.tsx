import { create } from "zustand";
import { SeaCreatureFilterType } from "../types";

interface State {
  filter: SeaCreatureFilterType;
}
interface Action {
  actions: { setMonth: (month: number) => void };
}

const useSeaCreatureFilterStore = create<State & Action>((set) => ({
  filter: {},
  actions: {
    setMonth: (month) =>
      set((state) => {
        return { filter: { ...state.filter, month: String(month) } };
      }),
  },
}));

export const useSeaCreatureFilter = () =>
  useSeaCreatureFilterStore((state) => state.filter);

export const useSeaCreatureFilterAction = () =>
  useSeaCreatureFilterStore((state) => state.actions);
