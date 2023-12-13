import filter from "lodash/filter";
import sortBy from "lodash/sortBy";
import { useTranslation } from "react-i18next";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface CartItemType {
  name: string;
  type: string;
  image_url: string;
  amount: number;
}

export interface CartListType {
  index: number;
  isSelected: boolean;
  items: CartItemType[];
  price: number;
  unit: "마일" | "덩";
}
interface State {
  cart_list: CartListType[];
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
      updateItemAmount: ({
        item,
        index,
        amount,
      }: Props & { amount: number }) => void;
      removeSelectecList: () => void;
      updatePrice: ({ index, price }: { index: number; price: number }) => void;

      mergeCart: () => void;
      changeUnit: ({ index }: { index: number }) => void;
      clearCart: () => void;
    };

    select: {
      selectItem: (index: number) => void;
      selectAll: (isSelect: boolean) => void;
    };
  };
}

export const useCartStore = create<State & Action>()(
  persist(
    immer((set) => ({
      cart_list: [],

      actions: {
        cart: {
          addItem: ({ item, index }) => {
            set((state) => {
              const isExist = state.cart_list.some((list) =>
                list.items.some((prev) => prev.name === item.name)
              );
              if (isExist) {
                alert("이미 있는 아이템입니다.");
                return;
              }

              const cartItem = state.cart_list.find(
                (list) => list.index === index
              );

              if (cartItem) {
                cartItem.items.push(item);
              } else {
                state.cart_list.push({
                  index,
                  items: [item],
                  isSelected: false,
                  price: 1,
                  unit: "마일",
                });
              }

              alert("거래 목록에 담김!");
            });
          },

          removeItem: ({ item, index }) =>
            set((state) => {
              state.cart_list = state.cart_list.map((list) => {
                if (list.index === index) {
                  list.items = list.items.filter(
                    (prev) => prev.name !== item.name
                  );
                }
                return list;
              });

              state.cart_list = state.cart_list.filter(
                (list) => list.items.length > 0
              );
            }),

          updateItemAmount: ({ item, index, amount }) =>
            set((state) => {
              const cartItem = state.cart_list.find(
                (list) => list.index === index
              );
              const existingItem = cartItem?.items.find(
                (prev) => prev.name === item.name
              );

              if (existingItem) {
                existingItem.amount = Math.max(0, amount);
              }
            }),

          removeSelectecList: () =>
            set((state) => {
              state.cart_list = state.cart_list.filter(
                (list) => !list.isSelected
              );
            }),

          updatePrice: ({ index, price }) =>
            set((state) => {
              const targetList = state.cart_list.find(
                (list) => list.index === index
              );
              if (targetList) {
                targetList.price = Math.max(0, price);
              }
            }),

          mergeCart: () =>
            set((state) => {
              const selectedList = state.cart_list.filter(
                (list) => list.isSelected && list.items.length > 0
              );
              if (!selectedList || selectedList.length < 2) {
                alert("두 개 이상의 항목을 선택해 주세욥");
                return state;
              }

              const lastIndex = sortBy(state.cart_list, "index").reverse()[0]
                .index;
              const mergedItems = selectedList.flatMap(
                (currentItem) => currentItem.items
              );

              const newCartItem: CartListType = {
                index: lastIndex + 1,
                items: mergedItems,
                isSelected: false,
                price: 1,
                unit: "마일",
              };

              const updatedCartList = filter(
                state.cart_list,
                (list) => !list.isSelected
              );
              updatedCartList.push(newCartItem);

              state.cart_list = updatedCartList;
            }),

          changeUnit: ({ index }) =>
            set((state) => {
              const targetList = state.cart_list.find(
                (list) => list.index === index
              );
              if (targetList) {
                targetList.unit = targetList.unit === "마일" ? "덩" : "마일";
              }
            }),

          clearCart: () => set({ cart_list: [] }),
        },

        select: {
          selectItem: (index: number) =>
            set((state) => {
              const targetList = state.cart_list.find(
                (list) => list.index === index
              );
              if (targetList) {
                targetList.isSelected = !targetList.isSelected;
              }
            }),

          selectAll: (isSelect: boolean) =>
            set((state) => ({
              cart_list: state.cart_list.map((list) => ({
                ...list,
                isSelected: isSelect,
              })),
            })),
        },
      },
    })),
    {
      name: "cart-storage",
      // storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ cart_list: state.cart_list }),
    }
  )
);

export const useCartList = (sort: "name" | "type" | false) =>
  useCartStore((state) => {
    const { t } = useTranslation();
    if (sort) {
      const compareItems = (
        item1: CartItemType,
        item2: CartItemType
      ): number => {
        if (sort === "name")
          return t(`${item1.type}.${item1.name}`).localeCompare(
            t(`${item2.type}.${item2.name}`),
            "ko-KR"
          );
        else return item1.type.localeCompare(item2.type);
      };

      const sortedCartList = state.cart_list.map((cart) => ({
        ...cart,
        items: [...cart.items].sort(compareItems),
      }));

      return sortedCartList.sort((a, b) =>
        compareItems(a.items[0], b.items[0])
      );
    }
    return state.cart_list;
  });

export const useCartActions = () => useCartStore((state) => state.actions.cart);

export const useCartSelectActions = () =>
  useCartStore((state) => state.actions.select);

export const useAddItem = () =>
  useCartStore((state) => state.actions.cart.addItem);

export const useCartLastIndex = () =>
  useCartStore((state) =>
    state.cart_list.length > 0
      ? sortBy(state.cart_list, "index").reverse()[0].index
      : 0
  );

export const useSelectedAll = () =>
  useCartStore((state) =>
    state.cart_list.length > 0
      ? state.cart_list.every((list) => list.isSelected)
      : false
  );
