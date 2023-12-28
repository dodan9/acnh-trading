import {
  useAddItem,
  useCartLastIndex,
} from "@src/features/client/generator/store/cart";
import { MouseEvent, memo } from "react";

export interface TradingItemType {
  name: string;
  type: string;
  image_url: string;
  amount: number;
}

const TradingButton = ({ name, type, image_url, amount }: TradingItemType) => {
  const cartCount = useCartLastIndex();
  const addItem = useAddItem();

  const handleAddItem = (event: MouseEvent) => {
    event.stopPropagation();
    addItem({
      item: {
        name,
        type,
        image_url,
        amount,
      },
      index: cartCount + 1,
    });
  };

  return <button onClick={handleAddItem}>거래</button>;
};

export default memo(TradingButton);
