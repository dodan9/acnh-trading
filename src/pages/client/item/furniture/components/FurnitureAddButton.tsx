import {
  useAddItem,
  useCartLastIndex,
} from "@src/pages/client/generator/store/cart";
import { memo } from "react";
import { FurnitureDetailType } from "../types";

const FurnitureAddButton = ({
  furniture,
}: {
  furniture: FurnitureDetailType;
}) => {
  const cartCount = useCartLastIndex();
  const addItem = useAddItem();
  const handleAddItem = () => {
    addItem({
      item: {
        name: furniture.name,
        type: `${furniture.category.toLowerCase()}`,
        image_url: furniture.variations[0].image_url,
        amount: 1,
      },
      index: cartCount + 1,
    });
  };

  return <button onClick={() => handleAddItem()}>거래</button>;
};

export default memo(FurnitureAddButton);
