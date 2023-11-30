import sortBy from "lodash/sortBy";
import { create } from "zustand";

export interface CartItemType {
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
    cart: {
      addItem: ({ item, index }: Props) => void;
      removeItem: ({ item, index }: Props) => void;
      updateItemAmount: ({ item, index }: Props) => void;
      removeSelectecList: () => void;
      updatePrice: ({ index, price }: { index: number; price: number }) => void;
      clearCart: () => void;
    };

    select: {
      selectItem: (index: number) => void;
      selectAll: (isSelect: boolean) => void;
    };
  };
}

const useCartStore = create<State & Action>((set) => ({
  cart_list: [],

  actions: {
    cart: {
      addItem: ({ item, index }) => {
        set((state) => {
          const cartItem = state.cart_list.find((list) => list.index === index);

          if (cartItem) {
            if (
              cartItem.items.some(
                (existingItem) => existingItem.name === item.name
              )
            ) {
              alert("이미 거래 목록에 있습니다.");
              return state;
            }

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

          alert("거래 목록에 담김!");
          return { cart_list: [...state.cart_list] };
        });
      },

      removeItem: ({ item, index }) =>
        set((state) => {
          const updatedCartList = state.cart_list
            .map((list) => {
              if (list.index === index) {
                list.items = list.items.filter(
                  (prev) => prev.name !== item.name
                );
              }
              return list;
            })
            .filter((list) => list.items.length > 0);
          return { cart_list: updatedCartList };
        }),

      updateItemAmount: ({ item, index }) =>
        set((state) => {
          const cartItem = state.cart_list.find((list) => list.index === index);
          if (cartItem) {
            cartItem.items = cartItem.items.map((prev) => {
              if (prev.name === item.name) {
                return {
                  ...prev,
                  amount: Math.max(0, prev.amount + item.amount),
                };
              } else return prev;
            });
          }

          console.log(cartItem?.items);

          return { cart_list: [...state.cart_list] };
        }),

      removeSelectecList: () =>
        set((state) => {
          const updatedCartList = state.cart_list.filter(
            (list) => !list.isSelected
          );
          return { cart_list: updatedCartList };
        }),

      updatePrice: ({ index, price }) =>
        set((state) => {
          const targetList = state.cart_list.find(
            (list) => list.index === index
          );
          if (targetList) {
            targetList.price = Math.max(0, targetList.price + price);
          }
          return { cart_list: [...state.cart_list] };
        }),

      clearCart: () => set({ cart_list: [] }),
    },

    select: {
      selectItem: (index: number) =>
        set((state) => ({
          cart_list: state.cart_list.map((list) => ({
            ...list,
            isSelected:
              list.index === index ? !list.isSelected : list.isSelected,
          })),
        })),

      selectAll: (isSelect: boolean) =>
        set((state) => ({
          cart_list: state.cart_list.map((list) => ({
            ...list,
            isSelected: isSelect,
          })),
        })),
    },
  },
}));

export const useCartList = () => useCartStore((state) => state.cart_list);
export const useCartLastIndex = () =>
  useCartStore((state) =>
    state.cart_list.length > 0
      ? sortBy(state.cart_list, "index").reverse()[0].index
      : 0
  );
export const useCartActions = () => useCartStore((state) => state.actions.cart);
export const useCartSelectActions = () =>
  useCartStore((state) => state.actions.select);
export const useAddItem = () =>
  useCartStore((state) => state.actions.cart.addItem);
