import { useAddItem, useCartLastIndex } from "@src/pages/generator/store/cart";
import { ClothingDetailType } from "../types";
import { LangEnum } from "@src/lang/enum";
import { memo } from "react";

const ClothingAddButton = ({ clothing }: { clothing: ClothingDetailType }) => {
  const cartCount = useCartLastIndex();
  const addItem = useAddItem();
  const handleAddItem = () => {
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

  return <button onClick={() => handleAddItem()}>거래</button>;
};

export default memo(ClothingAddButton);
