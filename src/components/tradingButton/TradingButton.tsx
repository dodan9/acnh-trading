import {
  useAddItem,
  useCartLastIndex,
} from "@src/pages/client/generator/store/cart";
import { memo } from "react";

export interface TradingItemType {
  name: string;
  type: string;
  image_url: string;
  amount: number;
}

const TradingButton = ({ name, type, image_url, amount }: TradingItemType) => {
  const cartCount = useCartLastIndex();
  const addItem = useAddItem();
  const handleAddItem = () => {
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

  return <button onClick={() => handleAddItem()}>거래</button>;
};

export default memo(TradingButton);
