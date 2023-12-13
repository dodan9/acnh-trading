import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { RecipeFilterType } from "../types";

interface State {
  keyword: string;
  filter: RecipeFilterType;
}
interface Action {
  actions: {
    setKeyword: (keyword: string) => void;
    setMaterial: (material: string) => void;
  };
}

const useRecipeFilterStore = create<State & Action>()(
  immer((set) => ({
    keyword: "",
    filter: {},
    actions: {
      setKeyword: (keyword: string) => set(() => ({ keyword })),
      setMaterial: (material: string) =>
        set((state) => {
          state.filter.material = material;
        }),
    },
  }))
);

export const useRecipeKeyword = () =>
  useRecipeFilterStore((state) => state.keyword);

export const useRecipeFilter = () =>
  useRecipeFilterStore((state) => state.filter);

export const useRecipeFilterAction = () =>
  useRecipeFilterStore((state) => state.actions);
