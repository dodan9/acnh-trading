import styled from "@emotion/styled";
import { device } from "@src/styled";

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
`;

export const ItemImageBox = styled.div`
  & img {
    width: 128px;
    @media ${device.medium} {
      width: 160px;
    }
  }
`;
