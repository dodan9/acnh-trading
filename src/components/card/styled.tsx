import styled from "@emotion/styled";
import { device } from "@src/styled";
import { passportColor } from "@src/styled/color";

export const ItemListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

export const ItemCardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  border-radius: 20px;
  border: 5px solid ${passportColor.shadow};
  text-align: center;
`;

export const ItemImageBox = styled.div`
  & img {
    width: 100px;
    @media ${device.medium} {
      width: 140px;
    }
  }
`;
