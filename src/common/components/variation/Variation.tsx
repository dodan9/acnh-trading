import styled from "@emotion/styled";
import { device } from "@src/common/styled";

const Variation = ({
  image_url,
  onClick,
}: {
  image_url: string;
  onClick: () => void;
}) => {
  return (
    <VariationBox onClick={onClick}>
      <img src={image_url} />
    </VariationBox>
  );
};

export default Variation;

export const VariationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const VariationBox = styled.div`
  & img {
    width: 50px;

    @media ${device.medium} {
      width: 80px;
    }
  }
`;
