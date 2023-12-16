import { useTranslation } from "react-i18next";
import {
  CartItemType,
  CartListType,
  useCartActions,
  useCartSelectActions,
} from "../store/cart";
import {
  AmountBox,
  AmountCell,
  CartItemRow,
  DeleteButton,
  PriceCell,
} from "../styled";
import { ItemImage } from "./CartItemImage";
import { ChangeEvent, memo } from "react";
import { LangEnum } from "@src/lang/enum";
import PaperRecipe from "@src/assets/icons/inventory_icons/PaperRecipe.png";
import { ItemIcon } from "@src/components/card/styled";

interface PriceUpdateProps {
  list: CartListType;
  price: number;
  updatePrice: ({ index, price }: { index: number; price: number }) => void;
}
interface AmountUpdateProps {
  item: CartItemType;
  index: number;
  amount: number;
  updateItemAmount: ({
    item,
    index,
    amount,
  }: {
    item: CartItemType;
    index: number;
    amount: number;
  }) => void;
}

const UpdateAmountButton = memo(
  ({ item, index, amount, updateItemAmount }: AmountUpdateProps) => {
    return (
      <button
        aria-details='icon'
        data-html2canvas-ignore='true'
        onClick={() =>
          updateItemAmount({
            item,
            index,
            amount: item.amount + amount,
          })
        }
      >
        {amount > 0 ? `+` : "-"}
      </button>
    );
  }
);

const PriceUpdateButton = memo(
  ({ list, price, updatePrice }: PriceUpdateProps) => {
    return (
      <button
        aria-details='icon'
        data-html2canvas-ignore='true'
        onClick={() =>
          updatePrice({ index: list.index, price: list.price + price })
        }
      >
        {price > 0 ? `+` : "-"}
      </button>
    );
  }
);

const CartListItem = memo(({ list }: { list: CartListType }) => {
  const { removeItem, updateItemAmount, updatePrice } = useCartActions();
  const { selectItem } = useCartSelectActions();
  const { t } = useTranslation();

  return list.items.map((item, index) => {
    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
      if (event.target.value === "") event.target.value = "0";
      console.log(event.target.value);

      const newValue = parseInt(event.target.value);
      updateItemAmount({ item, index: list.index, amount: newValue });
    };

    const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.value === "") event.target.value = "0";
      const newValue = parseInt(event.target.value);
      updatePrice({ index: list.index, price: newValue });
    };

    return (
      <CartItemRow
        key={item.name + item.image_url + list.index}
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
        <td aria-details='image'>
          <div>
            <ItemImage
              name={item.name + list.index + index}
              image_url={item.image_url}
            />
            <DeleteButton
              data-html2canvas-ignore='true'
              onClick={() => removeItem({ item, index: list.index })}
            >
              x
            </DeleteButton>
            {item.type === LangEnum.recipe && <ItemIcon src={PaperRecipe} />}
          </div>
        </td>
        <td>
          <div aria-details='amount'>
            <div aria-details='title'>
              {t(`${item.type}.${item.name}`)}
              {item.type === LangEnum.recipe && <img src={PaperRecipe} />}
            </div>
            <AmountBox>
              <UpdateAmountButton
                item={item}
                index={list.index}
                amount={-1}
                updateItemAmount={updateItemAmount}
              />
              <AmountCell>
                <div>{item.amount}</div>
                <div data-html2canvas-ignore='true'>
                  <input
                    value={item.amount ?? ""}
                    onChange={handleAmountChange}
                  />
                </div>
              </AmountCell>
              <UpdateAmountButton
                item={item}
                index={list.index}
                amount={1}
                updateItemAmount={updateItemAmount}
              />
              <div>{` 개`}</div>
            </AmountBox>
          </div>
        </td>
        {index === 0 && (
          <PriceCell rowSpan={list.items.length}>
            <AmountBox>
              <PriceUpdateButton
                list={list}
                price={-1}
                updatePrice={updatePrice}
              />
              <AmountCell>
                <div>{list.price}</div>
                <div data-html2canvas-ignore='true'>
                  <input
                    value={list.price ?? ""}
                    onChange={handlePriceChange}
                  />
                </div>
              </AmountCell>

              <PriceUpdateButton
                list={list}
                price={1}
                updatePrice={updatePrice}
              />
              <span>{list.unit}</span>
            </AmountBox>
          </PriceCell>
        )}
      </CartItemRow>
    );
  });
});
export default CartListItem;
