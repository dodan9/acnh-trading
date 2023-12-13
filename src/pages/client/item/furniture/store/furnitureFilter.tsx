import { create } from "zustand";
import { FurnitureCategory, FurnitureFilterType } from "../types";
import { immer } from "zustand/middleware/immer";
import { ColorEnum } from "@src/assets/enum";

interface State {
  keyword: string;
  filter: FurnitureFilterType;
}
interface Action {
  actions: {
    setKeyword: (keyword: string) => void;
    setCategory: (category: FurnitureCategory) => void;
    setColor: (color: ColorEnum) => void;
  };
}

const useFurnitureFilterStore = create<State & Action>()(
  immer((set) => ({
    keyword: "",
    filter: { category: FurnitureCategory.Housewares },
    actions: {
      setKeyword: (keyword: string) => set(() => ({ keyword })),
      setCategory: (category) =>
        set((state) => {
          state.filter.category = category;
        }),
      setColor: (color) => {
        set((state) => {
          if (state.filter.color?.includes(color)) {
            state.filter.color = state.filter.color.filter(
              (current) => current !== color
            );
          } else state.filter.color = [...(state.filter.color || []), color];
        });
      },
    },
  }))
);

export const useFurnitureKeyword = () =>
  useFurnitureFilterStore((state) => state.keyword);

export const useFurnitureFilter = () =>
  useFurnitureFilterStore((state) => state.filter);

export const useFurnitureFilterAction = () =>
  useFurnitureFilterStore((state) => state.actions);
