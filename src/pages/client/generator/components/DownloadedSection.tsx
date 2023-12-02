import {
  CartItemRow,
  CartBody,
  Section,
  SectionHeader,
  CartHead,
  CartTable,
  EmptyCell,
  CartNoticeBox,
} from "../styled";
import { ChangeEvent, useState } from "react";
import {
  useCartActions,
  useCartList,
  useCartSelectActions,
  useSelectedAll,
} from "../store/cart";
import { useNavigate } from "react-router";
import CartListItem from "./CartListItem";

const DownloadedSection = () => {
  const isSelectedAll = useSelectedAll();
  const cart_list = useCartList();
  const { clearCart, mergeCart, removeSelectecList } = useCartActions();
  const { selectAll } = useCartSelectActions();
  const navigate = useNavigate();

  const [noticeValue, setNoticeValue] = useState<string>("");
  const [notice, setNotice] = useState<string[]>([]);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNoticeValue(value);
  };

  const handleAddNotice = () => {
    setNotice([...notice, noticeValue]);
    setNoticeValue("");
  };

  const handleRemoveNotice = (index: number) => {
    const updatedNotice = [...notice];
    updatedNotice.splice(index, 1);
    setNotice(updatedNotice);
  };

  // 정렬, 그룹화 기능 추가 요망
  return (
    <Section>
      <SectionHeader>거래소</SectionHeader>

      <div data-html2canvas-ignore="true">
        <button onClick={() => clearCart()}>초기화</button>
        <button onClick={() => removeSelectecList()}>선택 항목 삭제</button>
        <button onClick={() => mergeCart()}>선택 항목 병합</button>
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
            <th colSpan={3}>거래 목록</th>
            <th>가격</th>
          </tr>
        </CartHead>
        <CartBody>
          <CartItemRow className="last" />
          {cart_list.length > 0 ? (
            cart_list.map((list) => {
              return <CartListItem list={list} key={list.index} />;
            })
          ) : (
            <tr>
              <EmptyCell colSpan={5}>아이템을 담아 주세욥</EmptyCell>
            </tr>
          )}
          <tr data-html2canvas-ignore="true">
            <EmptyCell colSpan={5}>
              <button onClick={() => navigate("/")}>아이템 추가하기</button>
            </EmptyCell>
          </tr>
        </CartBody>
      </CartTable>

      <CartNoticeBox>
        <div data-html2canvas-ignore="true">덧붙임말</div>

        <div>
          {notice.length > 0 &&
            notice.map((noti, index) => {
              return (
                <div key={index}>
                  <span>{noti}</span>
                  <button onClick={() => handleRemoveNotice(index)}>x</button>
                </div>
              );
            })}
        </div>

        <div data-html2canvas-ignore="true">
          <input value={noticeValue} onChange={handleTextChange} />
          <button onClick={handleAddNotice}>추가</button>
        </div>
      </CartNoticeBox>
    </Section>
  );
};

export default DownloadedSection;
