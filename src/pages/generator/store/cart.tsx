import { sortBy } from "lodash";
import { create } from "zustand";

interface CartItemType {
  name: string;
  type: string;
  image_url: string;
  amount: number;
}
interface State {
  cart_list: {
    index: number;
    isSelected: boolean;
    items: CartItemType[];
    price: number;
    unit: "마일" | "덩";
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

    selectItem: (index: number) => void;
    selectAll: () => void;
    unselectAll: () => void;
  };
}

const useCartStore = create<State & Action>((set, get) => ({
  cart_list: [],
  warning: [""],

  actions: {
    addItem: ({ item, index }) => {
      set((state) => {
        const cartItem = state.cart_list.find((list) => list.index === index);

        if (cartItem) {
          cartItem.items.push(item);
        } else {
          state.cart_list.push({
            index,
            items: [item],
            isSelected: false,
            price: 0,
            unit: "마일",
          });
        }

        console.log(get().cart_list);
        alert("장바구니에 담김!");
        return { cart_list: [...state.cart_list] };
      });
    },

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

    selectItem: (index) =>
      set((state) => ({
        cart_list: state.cart_list.map((list) => ({
          ...list,
          isSelected: list.index === index,
        })),
      })),

    selectAll: () => {
      set((state) => ({
        cart_list: state.cart_list.map((list) => ({
          ...list,
          isSelected: true,
        })),
      }));
    },

    unselectAll: () => {
      set((state) => ({
        cart_list: state.cart_list.map((list) => ({
          ...list,
          isSelected: false,
        })),
      }));
    },
  },
}));

export const useCart = () => useCartStore((state) => state.cart_list);
export const useCartLastIndex = () =>
  useCartStore((state) =>
    state.cart_list.length > 0 ? sortBy(state.cart_list, "index")[0].index : 0
  );
export const useAddItem = () => useCartStore((state) => state.actions.addItem);
export const useRemoveItem = () =>
  useCartStore((state) => state.actions.removeItem);
export const useCartAction = () => useCartStore((state) => state.actions);
