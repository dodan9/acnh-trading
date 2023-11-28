import { useTranslation } from "react-i18next";
import {
  CartItemType,
  useCartActions,
  useCartList,
  useCartSelectActions,
} from "../store/cart";
import {
  CartItemRow,
  CartBody,
  Section,
  SectionHeader,
  CartHead,
  CartTable,
  EmptyCell,
} from "../styled";
import { Fragment, useEffect } from "react";
import { imgRequest } from "@src/services/api";

const ItemImage = ({
  name,
  image_url,
}: {
  name: string;
  image_url: string;
}) => {
  const handleLoad = async (image_url: string, name: string) => {
    const imgElement = document.getElementById(name) as HTMLImageElement;

    try {
      const response = await imgRequest({
        url: image_url,
        headers: {
          "Content-Type": "image/png",
        },
        responseType: "blob",
      });
      const blob = response.data;

      const imageUrl = URL.createObjectURL(blob);

      if (imgElement) imgElement.src = imageUrl;
    } catch (error) {
      console.error("Error fetching or processing image:", error);
    }
  };

  useEffect(() => {
    handleLoad(image_url, name);
  }, [image_url]);
  return <img src={image_url} id={name} />;
};
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
    item?: CartItemType;
    index: number;
    amount: number;
  }

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
  // 정렬, 그룹화 기능 추가 요망
  return (
    <Section>
      <SectionHeader>거래소</SectionHeader>

      <div data-html2canvas-ignore="true">
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
                      rowSpan={list.items.length + 1}
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
                      rowSpan={list.items.length + 1}
                    >
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
                    </td>
                  </tr>
                  {list.items.map((item) => {
                    return (
                      <Fragment key={item.name}>
                        <CartItemRow>
                          <td>
                            <ItemImage
                              name={item.name}
                              image_url={item.image_url}
                            />
                          </td>
                          <td>
                            <div>
                              {`${t(`${item.type}.${item.name}`)} x ${
                                item.amount
                              }`}
                            </div>
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
                          <td data-html2canvas-ignore="true">
                            <button
                              onClick={() =>
                                removeItem({ item, index: list.index })
                              }
                            >
                              x
                            </button>
                          </td>
                        </CartItemRow>
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
