import { useTranslation } from "react-i18next";
import {
  CartItemType,
  CartListType,
  useCartActions,
  useCartSelectActions,
} from "../store/cart";
import { CartItemRow, PriceCell } from "../styled";
import { ItemImage } from "./CartItemImage";
import { memo } from "react";

interface PriceUpdateProps {
  index: number;
  price: number;
}
interface AmountUpdateProps {
  item: CartItemType;
  index: number;
  amount: number;
}

const CartListItem = memo(({ list }: { list: CartListType }) => {
  const { removeItem, updateItemAmount, updatePrice } = useCartActions();
  const { selectItem } = useCartSelectActions();
  const { t } = useTranslation();

  const UpdateAmountButton = memo(
    ({ item, index, amount }: AmountUpdateProps) => {
      return (
        <button
          onClick={() =>
            updateItemAmount({
              item,
              index,
              amount,
            })
          }
        >
          {amount > 0 ? `+${amount}` : amount}
        </button>
      );
    }
  );

  const PriceUpdateButton = memo(({ index, price }: PriceUpdateProps) => {
    return (
      <button onClick={() => updatePrice({ index, price })}>
        {price > 0 ? `+${price}` : price}
      </button>
    );
  });

  return list.items.map((item, index) => {
    return (
      <CartItemRow
        key={item.name}
        className={index + 1 === list.items.length ? "last" : ""}
      >
        {index === 0 && (
          <td rowSpan={list.items.length} data-html2canvas-ignore="true">
            <input
              type="checkbox"
              checked={list.isSelected}
              onChange={() => selectItem(list.index)}
            />
          </td>
        )}
        <td>
          <ItemImage name={item.name} image_url={item.image_url} />
        </td>
        <td>
          <div>{`${t(`${item.type}.${item.name}`)} x ${item.amount}`}</div>
          <div data-html2canvas-ignore="true">
            <UpdateAmountButton item={item} index={list.index} amount={1} />
            <UpdateAmountButton item={item} index={list.index} amount={-1} />
            <UpdateAmountButton item={item} index={list.index} amount={10} />
            <UpdateAmountButton item={item} index={list.index} amount={-10} />
          </div>
        </td>
        <td>
          <button
            data-html2canvas-ignore="true"
            onClick={() => removeItem({ item, index: list.index })}
          >
            x
          </button>
        </td>

        {index === 0 && (
          <PriceCell style={{ minWidth: "62px" }} rowSpan={list.items.length}>
            <div>{`${list.price} ${list.unit}`}</div>
            <div data-html2canvas-ignore="true">
              <PriceUpdateButton index={list.index} price={1} />
              <PriceUpdateButton index={list.index} price={-1} />
              <PriceUpdateButton index={list.index} price={10} />
              <PriceUpdateButton index={list.index} price={-10} />
            </div>
          </PriceCell>
        )}
      </CartItemRow>
    );
  });
});
export default CartListItem;
