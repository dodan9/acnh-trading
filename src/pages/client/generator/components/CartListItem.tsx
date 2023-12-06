import { useTranslation } from "react-i18next";
import {
  CartItemType,
  CartListType,
  useCartActions,
  useCartSelectActions,
} from "../store/cart";
import { AmountBox, AmountCell, CartItemRow, PriceCell } from "../styled";
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
  const { removeItem, updateItemAmount, updatePrice, changeUnit } =
    useCartActions();
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
          {amount > 0 ? `+` : "-"}
        </button>
      );
    }
  );

  const PriceUpdateButton = memo(({ index, price }: PriceUpdateProps) => {
    return (
      <button onClick={() => updatePrice({ index, price })}>
        {price > 0 ? `+` : "-"}
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
          <td rowSpan={list.items.length} data-html2canvas-ignore='true'>
            <input
              type='checkbox'
              checked={list.isSelected}
              onChange={() => selectItem(list.index)}
            />
          </td>
        )}
        <td>
          <ItemImage name={item.name} image_url={item.image_url} />
          <button
            data-html2canvas-ignore='true'
            onClick={() => removeItem({ item, index: list.index })}
          >
            x
          </button>
        </td>
        <td>
          <div>{t(`${item.type}.${item.name}`)}</div>
          <AmountBox>
            <UpdateAmountButton
              data-html2canvas-ignore='true'
              item={item}
              index={list.index}
              amount={-1}
            />
            <AmountCell>
              <div>{item.amount}</div>
              <div />
            </AmountCell>
            <UpdateAmountButton
              data-html2canvas-ignore='true'
              item={item}
              index={list.index}
              amount={1}
            />
          </AmountBox>
        </td>
        {index === 0 && (
          <PriceCell rowSpan={list.items.length}>
            <AmountBox>
              <PriceUpdateButton
                data-html2canvas-ignore='true'
                index={list.index}
                price={-1}
              />
              <AmountCell>
                <div>{list.price}</div>
                <div />
              </AmountCell>

              <PriceUpdateButton
                data-html2canvas-ignore='true'
                index={list.index}
                price={1}
              />
              <span>{list.unit}</span>
            </AmountBox>
            {/* <div>
              <button
                data-html2canvas-ignore='true'
                onClick={() => changeUnit({ index: list.index })}
              >
                ↔
              </button>
            </div> */}
          </PriceCell>
        )}
      </CartItemRow>
    );
  });
});
export default CartListItem;
