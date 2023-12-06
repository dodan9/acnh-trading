import { create } from "zustand";
import { persist } from "zustand/middleware";

export type FruitType = "apple" | "pear" | "orange" | "peach" | "cherry" | "";
export type HemisphereType = "north" | "south";
export type ThemeType = "light" | "dark";

interface State {
  island: {
    name: string;
    time: number; // 현재 시간과 몇 초 차이인지 계산하여 입력
    fruit: FruitType;
    hemisphere: HemisphereType;
  };
  theme: ThemeType;
}
interface Action {
  actions: {
    island: {
      setName: (name: string) => void;
      setTime: (time: number) => void;
      setFruit: (fruit: FruitType) => void;
      setHemisphere: (hemisphere: HemisphereType) => void;
    };
    theme: { setTheme: (theme: ThemeType) => void };
  };
}

const useSettingStore = create<State & Action>()(
  persist(
    (set) => ({
      island: { name: "", time: 0, fruit: "", hemisphere: "north" },
      theme: "light",
      actions: {
        island: {
          setName: (name) =>
            set((state) => {
              return { island: { ...state.island, name } };
            }),

          setTime: (time) =>
            set((state) => {
              return { island: { ...state.island, time: time } };
            }),

          setFruit: (fruit) =>
            set((state) => {
              return { island: { ...state.island, fruit } };
            }),

          setHemisphere: (hemisphere) =>
            set((state) => {
              return { island: { ...state.island, hemisphere } };
            }),
        },
        theme: { setTheme: (theme) => set({ theme }) },
      },
    }),
    {
      name: "setting-storage",
      partialize: (state) => ({ island: state.island, theme: state.theme }),
    }
  )
);

export const useIslandInfo = () => useSettingStore((state) => state.island);
export const useThemeInfo = () => useSettingStore((state) => state.theme);

export const useIslandActions = () =>
  useSettingStore((state) => state.actions.island);
