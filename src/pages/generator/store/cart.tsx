import { create } from "zustand";

interface CartItemType {
  name: string;
  image_url: string;
  amount: number;
}
interface State {
  cart_list: {
    index: number;
    items: CartItemType[];
    price: number;
    unit: string;
  }[];
}

interface Props {
  item: CartItemType;
  index: number;
}
interface Action {
  actions: {
    addItem: ({ item, index }: Props) => void;
    removeItem: ({ item, index }: Props) => void;
    updateItem: ({ item, index }: Props) => void;
    clearCart: () => void;
  };
}

const useCartStore = create<State & Action>((set) => ({
  cart_list: [],
  warning: [""],

  actions: {
    addItem: ({ item, index }) =>
      set((state) => {
        const updatedCartList = state.cart_list.map((list) =>
          list.index === index
            ? { ...list, items: [...list.items, item] }
            : list
        );
        return { cart_list: updatedCartList };
      }),

    removeItem: ({ item, index }) =>
      set((state) => {
        const updatedCartList = state.cart_list.map((list) => {
          if (list.index === index) {
            list.items = list.items.filter((prev) => prev.name !== item.name);
          }
          return list;
        });
        return { cart_list: updatedCartList };
      }),

    updateItem: ({ item, index }) =>
      set((state) => {
        const updatedCartList = state.cart_list.map((list) =>
          list.index === index
            ? {
                ...list,
                items: list.items.map((prev) =>
                  prev.name === item.name
                    ? { ...prev, amount: item.amount }
                    : prev
                ),
              }
            : list
        );
        return { cart_list: updatedCartList };
      }),
    clearCart: () => set({ cart_list: [] }),
  },
}));

export const useCart = () => useCartStore((state) => state.cart_list);
export const useCartAction = () => useCartStore((state) => state.actions);
