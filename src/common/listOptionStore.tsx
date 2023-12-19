import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  isList: boolean;
}
interface Action {
  actions: {
    setIsList: (isList: boolean) => void;
  };
}

const useListOptionStore = create<State & Action>()(
  persist(
    (set) => ({
      isList: false,
      actions: {
        setIsList: (isList: boolean) => set(() => ({ isList })),
      },
    }),
    {
      name: "setting-storage",
      partialize: (state) => ({ isList: state.isList }),
    }
  )
);

export const useListOption = () => useListOptionStore((state) => state.isList);

export const useListOptionActions = () =>
  useListOptionStore((state) => state.actions);
