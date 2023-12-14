import styled from "@emotion/styled";
import { device } from "@src/styled";
import { passportColor } from "@src/styled/color";

export const ItemListBox = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 10px 0;

  @media ${device.medium} {
    gap: 30px;
  }
`;

export const ItemCardBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  border-radius: 20px;
  border: 5px solid ${passportColor.shadow};
  text-align: center;
  cursor: pointer;
`;

export const ItemImageBox = styled.div`
  & img {
    width: 90px;
    @media ${device.small} {
      width: 100px;
    }
    @media ${device.medium} {
      width: 120px;
    }
  }
`;

export const ItemIcon = styled.img`
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40% !important;
`;
