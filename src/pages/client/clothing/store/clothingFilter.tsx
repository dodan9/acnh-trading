import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { ColorEnum } from "@src/assets/enum";
import {
  ClothingCategory,
  ClothingFilterType,
  ClothingLabelTheme,
  ClothingStyle,
} from "../types";

interface State {
  keyword: string;
  filter: ClothingFilterType;
}
interface Action {
  actions: {
    setKeyword: (keyword: string) => void;
    setCategory: (category: ClothingCategory) => void;
    setColor: (color: ColorEnum) => void;
    setStyle: (style: ClothingStyle) => void;
    setLabelTheme: (label: ClothingLabelTheme) => void;
    clearFilter: () => void;
  };
}

const useClothingFilterStore = create<State & Action>()(
  immer((set) => ({
    keyword: "",
    filter: {},
    actions: {
      setKeyword: (keyword: string) => set(() => ({ keyword })),

      setCategory: (category) => {
        set((state) => {
          state.filter.category = category;
        });
      },

      setColor: (color) => {
        set((state) => {
          if (state.filter.color?.includes(color)) {
            state.filter.color = state.filter.color.filter(
              (current) => current !== color
            );
          } else if (state.filter.color && state.filter.color.length >= 2) {
            alert("색상은 2개까지 선택 가능합니다.");
            return;
          } else state.filter.color = [...(state.filter.color || []), color];
        });
      },

      setStyle: (style) => {
        set((state) => {
          if (state.filter.style?.includes(style)) {
            state.filter.style = state.filter.style.filter(
              (current) => current !== style
            );
          } else if (state.filter.style && state.filter.style.length >= 2) {
            alert("스타일은 2개까지 선택 가능합니다.");
            return;
          } else state.filter.style = [...(state.filter.style || []), style];
        });
      },

      setLabelTheme: (label) => {
        set((state) => {
          state.filter.labeltheme = label;
        });
      },

      clearFilter: () => {
        set((state) => {
          state.filter = {};
        });
      },
    },
  }))
);

export const useClothingKeyword = () =>
  useClothingFilterStore((state) => state.keyword);

export const useClothingFilter = () =>
  useClothingFilterStore((state) => state.filter);

export const useClothingFilterAction = () =>
  useClothingFilterStore((state) => state.actions);
