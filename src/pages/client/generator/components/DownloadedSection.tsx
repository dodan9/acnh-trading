import {
  CartItemRow,
  CartBody,
  Section,
  SectionHeader,
  CartHead,
  CartTable,
  EmptyCell,
} from "../styled";
import {
  useCartList,
  useCartSelectActions,
  useSelectedAll,
} from "../store/cart";
import { useNavigate } from "react-router";
import CartListItem from "./CartListItem";
import CartButtons from "./CartButtons";
import CartNotice from "./CartNotice";

const DownloadedSection = () => {
  const isSelectedAll = useSelectedAll();
  const cart_list = useCartList();
  const { selectAll } = useCartSelectActions();
  const navigate = useNavigate();

  // 정렬, 그룹화 기능 추가 요망
  return (
    <Section>
      <SectionHeader>거래소</SectionHeader>

      <CartButtons />

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

      <CartNotice />
    </Section>
  );
};

export default DownloadedSection;
