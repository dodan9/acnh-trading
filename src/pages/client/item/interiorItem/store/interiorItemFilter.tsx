import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { InteriorItemFilterType } from "../types";
import { ColorEnum } from "@src/assets/enum";

interface State {
  keyword: string;
  filter: InteriorItemFilterType;
}
interface Action {
  actions: {
    setKeyword: (keyword: string) => void;
    setColor: (color: ColorEnum) => void;
  };
}

const useInteriorItemFilterStore = create<State & Action>()(
  immer((set) => ({
    keyword: "",
    filter: {},
    actions: {
      setKeyword: (keyword: string) => set(() => ({ keyword })),
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
    },
  }))
);

export const useInteriorItemKeyword = () =>
  useInteriorItemFilterStore((state) => state.keyword);

export const useInteriorItemFilter = () =>
  useInteriorItemFilterStore((state) => state.filter);

export const useInteriorItemFilterAction = () =>
  useInteriorItemFilterStore((state) => state.actions);
