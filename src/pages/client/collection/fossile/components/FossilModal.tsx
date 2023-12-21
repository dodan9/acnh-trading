import { Modal } from "@src/common/components/modal/Modal";
import { FossilDetailType } from "../types";
import { LangEnum } from "@src/common/util/lang/enum";
import { useTranslation } from "react-i18next";
import { FossilPartCard } from "../styled";
import TradingButton from "@src/common/components/tradingButton/TradingButton";

const FossilModal = ({
  onClose,
  fossil,
}: {
  onClose: () => void;
  fossil: FossilDetailType;
}) => {
  const { t } = useTranslation();

  return (
    <Modal onClose={onClose}>
      <FossilPartCard>
        <div>
          <img src={fossil.image_url} alt={fossil.name} />
        </div>

        <div>{t(`${LangEnum.fossil}.parts.${fossil.name}`)}</div>
        <div>
          색상:{" "}
          {fossil.colors
            .map((color) => t(`${LangEnum.color}.${color}`))
            .join(", ")}
        </div>
        <div>판매: {fossil.sell} 벨</div>
        <div>해피홈 점수: {fossil.hha_base} 점</div>

        <div>
          <TradingButton
            name={fossil.name}
            type={`${LangEnum.fossil}.parts`}
            image_url={fossil.image_url}
            amount={1}
          />
        </div>
      </FossilPartCard>
    </Modal>
  );
};

export default FossilModal;
