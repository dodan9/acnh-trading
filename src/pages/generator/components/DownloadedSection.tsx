import { useTranslation } from "react-i18next";
import {
  CartItemType,
  useCartActions,
  useCartList,
  useCartSelectActions,
} from "../store/cart";
import {
  CartItem,
  CartBody,
  Section,
  SectionHeader,
  CartHead,
  CartTable,
  EmptyCell,
} from "../styled";
import { Fragment } from "react";

const DownloadedSection = () => {
  const cart_list = useCartList();
  const isSelectedAll =
    cart_list.length > 0 ? cart_list.every((list) => list.isSelected) : false;
  const {
    removeItem,
    updateItemAmount,
    removeSelectecList,
    updatePrice,
    clearCart,
  } = useCartActions();
  const { selectItem, selectAll } = useCartSelectActions();
  const { t } = useTranslation();

  interface UpdateProp {
    item: CartItemType;
    index: number;
    amount: number;
  }

  const handleUpdateAmount = ({ item, index, amount }: UpdateProp) => {
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

  return (
    <Section>
      <SectionHeader>거래소</SectionHeader>

      <div>
        <button onClick={() => clearCart()}>초기화</button>
        <button onClick={() => removeSelectecList()}>선택 항목 삭제</button>
      </div>

      <CartTable>
        <CartHead>
          <tr>
            <th data-html2canvas-ignore="true">
              <input
                type="checkbox"
                checked={isSelectedAll}
                onChange={() => selectAll(!isSelectedAll)}
              />
            </th>
            <th>가격</th>
            <th colSpan={3}>거래 목록</th>
          </tr>
        </CartHead>
        <CartBody>
          {cart_list.length > 0 ? (
            cart_list.map((list) => {
              return (
                <Fragment key={list.index}>
                  <tr>
                    <td
                      rowSpan={list.items.length * 2 + 1}
                      data-html2canvas-ignore="true"
                    >
                      <input
                        type="checkbox"
                        checked={list.isSelected}
                        onChange={() => selectItem(list.index)}
                      />
                    </td>
                    <td
                      style={{ minWidth: "62px" }}
                      rowSpan={list.items.length * 2 + 1}
                    >{`${list.price} ${list.unit}`}</td>
                  </tr>
                  {list.items.map((item) => {
                    return (
                      <Fragment key={item.name}>
                        <CartItem>
                          <td>
                            <img src={item.image_url} />
                          </td>
                          <td>
                            {`${t(`${item.type}.${item.name}`)} x ${
                              item.amount
                            }`}
                          </td>
                          <td data-html2canvas-ignore="true">
                            <button
                              onClick={() =>
                                removeItem({ item, index: list.index })
                              }
                            >
                              x
                            </button>
                          </td>
                        </CartItem>
                        <tr>
                          <td colSpan={3} data-html2canvas-ignore="true">
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
                          </td>
                        </tr>
                      </Fragment>
                    );
                  })}
                </Fragment>
              );
            })
          ) : (
            <tr>
              <EmptyCell colSpan={5}>아이템을 담아 주세욥</EmptyCell>
            </tr>
          )}
        </CartBody>
      </CartTable>
    </Section>
  );
};

export default DownloadedSection;
