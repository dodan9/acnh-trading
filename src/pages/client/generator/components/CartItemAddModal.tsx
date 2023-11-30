import { Modal } from "@src/components/modal/Modal";
import { LangEnum } from "@src/lang/enum";
import { ClothingCategory } from "@src/pages/client/clothing/types";
import { useTranslation } from "react-i18next";

const CartItemAddModal = ({ onClose }: { onClose: () => void }) => {
  const { t } = useTranslation();
  return (
    <Modal onClose={onClose}>
      <>
        <div>카테고리 선택</div>
        <div>
          옷:{" "}
          {Object.values(ClothingCategory)
            .map((category) => t(`${LangEnum.clothing}.category.${category}`))
            .join(", ")}
        </div>
        <div>가구: 가구, 잡화, 벽장식</div>
      </>
    </Modal>
  );
};

export default CartItemAddModal;
