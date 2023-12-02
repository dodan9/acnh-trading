import { useTranslation } from "react-i18next";
import {
  CartItemType,
  useCartActions,
  useCartList,
  useCartSelectActions,
} from "../store/cart";
import { CartItemRow, EmptyCell, PriceCell } from "../styled";
import { ItemImage } from "./CartItemImage";

interface UpdateProp {
  item?: CartItemType;
  index: number;
  amount: number;
}

const CartList = () => {
  const cart_list = useCartList();

  const { removeItem, updateItemAmount, updatePrice } = useCartActions();
  const { selectItem } = useCartSelectActions();
  const { t } = useTranslation();

  const handleUpdateAmount = ({ item, index, amount }: UpdateProp) => {
    if (!item) return;
    const updatedItem = { ...item, amount };
    updateItemAmount({ item: updatedItem, index });
  };

  const handleUpdatePrice = ({
    index,
    price,
  }: {
    index: number;
    price: number;
  }) => {
    updatePrice({ index, price });
  };

  const UpdateAmountButton = ({
    item,
    index,
    amount,
    type,
  }: UpdateProp & { type: "amount" | "price" }) => {
    return (
      <button
        onClick={() =>
          type === "amount"
            ? handleUpdateAmount({
                item,
                index,
                amount,
              })
            : handleUpdatePrice({ index, price: amount })
        }
      >
        {amount > 0 ? `+${amount}` : amount}
      </button>
    );
  };

  if (cart_list.length === 0)
    return (
      <tr>
        <EmptyCell colSpan={5}>아이템을 담아 주세욥</EmptyCell>
      </tr>
    );

  return cart_list.map((list) => {
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
              <UpdateAmountButton
                item={item}
                index={list.index}
                amount={1}
                type="amount"
              />
              <UpdateAmountButton
                item={item}
                index={list.index}
                amount={-1}
                type="amount"
              />
              <UpdateAmountButton
                item={item}
                index={list.index}
                amount={10}
                type="amount"
              />
              <UpdateAmountButton
                item={item}
                index={list.index}
                amount={-10}
                type="amount"
              />
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
                <UpdateAmountButton
                  index={list.index}
                  amount={1}
                  type="price"
                />
                <UpdateAmountButton
                  index={list.index}
                  amount={-1}
                  type="price"
                />
                <UpdateAmountButton
                  index={list.index}
                  amount={10}
                  type="price"
                />
                <UpdateAmountButton
                  index={list.index}
                  amount={-10}
                  type="price"
                />
              </div>
            </PriceCell>
          )}
        </CartItemRow>
      );
    });
  });
};

export default CartList;
