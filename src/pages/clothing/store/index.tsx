import { useAddItem, useCartLastIndex } from "@src/pages/generator/store/cart";
import { LangEnum } from "@src/lang/enum";
import { ClothingDetailType } from "../types";

export const handleAddItem = (clothing: ClothingDetailType) => {
  const cartCount = useCartLastIndex();
  const addItem = useAddItem();

  addItem({
    item: {
      name: clothing.name,
      type: `${LangEnum.clothing}.${clothing.category}`,
      image_url: clothing.variations[0].image_url,
      amount: 1,
    },
    index: cartCount + 1,
  });
};
