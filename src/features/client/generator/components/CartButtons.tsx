import { memo } from "react";
import { useCartActions } from "../store/cart";

const CartButtons = () => {
  const { clearCart, mergeCart, removeSelectecList } = useCartActions();

  return (
    <div data-html2canvas-ignore="true">
      <button onClick={() => clearCart()}>초기화</button>
      <button onClick={() => removeSelectecList()}>선택 항목 삭제</button>
      <button onClick={() => mergeCart()}>선택 항목 병합</button>
    </div>
  );
};

export default memo(CartButtons);
