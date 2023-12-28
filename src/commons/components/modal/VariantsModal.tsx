import { ColorType } from "@src/assets/enum";
import { Modal } from "@src/commons/components/modal/Modal";
import TradingButton from "@src/commons/components/tradingButton/TradingButton";
import { FlexBox } from "@src/commons/styled";

const VariantsModal = ({
  onClose,
  variations,
  name,
  type,
}: {
  onClose: () => void;
  variations: {
    variation: string;
    image_url: string;
    pattern?: string;
    colors?: [ColorType, (ColorType | undefined)?];
  }[];
  name: string;
  type: string;
}) => {
  return (
    <Modal onClose={onClose}>
      <FlexBox>
        {variations.map((variant) => {
          return (
            <div key={variant.variation}>
              <img src={variant.image_url} />
              <TradingButton
                name={name}
                type={type}
                image_url={variant.image_url}
                amount={1}
              />
            </div>
          );
        })}
      </FlexBox>
    </Modal>
  );
};

export default VariantsModal;
