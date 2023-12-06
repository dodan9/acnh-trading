import {
  CartItemRow,
  CartBody,
  CartHead,
  CartTable,
  EmptyCell,
} from "../styled";
import CartListItem from "./CartListItem";
import {
  useCartList,
  useCartSelectActions,
  useSelectedAll,
} from "../store/cart";
import { useNavigate } from "react-router";
import { useState } from "react";

const CartTableBox = () => {
  const [sort, setSort] = useState<"name" | "type" | false>(false);
  const isSelectedAll = useSelectedAll();
  const cart_list = useCartList(sort);
  const { selectAll } = useCartSelectActions();
  const navigate = useNavigate();

  return (
    <CartTable>
      <CartHead>
        <tr>
          <th data-html2canvas-ignore='true'>
            <input
              type='checkbox'
              checked={isSelectedAll}
              onChange={() => selectAll(!isSelectedAll)}
            />
          </th>
          <th colSpan={2}>
            거래 목록
            <span data-html2canvas-ignore='true'>
              <button onClick={() => setSort("name")}>이름순</button>
              <button onClick={() => setSort("type")}>종류별</button>
            </span>
          </th>
          <th>가격</th>
        </tr>
      </CartHead>
      <CartBody>
        <CartItemRow className='last' />
        {cart_list.length > 0 ? (
          cart_list.map((list) => {
            return <CartListItem list={list} key={list.index} />;
          })
        ) : (
          <tr>
            <EmptyCell colSpan={5}>아이템을 담아 주세욥</EmptyCell>
          </tr>
        )}
        <tr data-html2canvas-ignore='true'>
          <EmptyCell colSpan={5}>
            <button onClick={() => navigate("/")}>아이템 추가하기</button>
          </EmptyCell>
        </tr>
      </CartBody>
    </CartTable>
  );
};

export default CartTableBox;
