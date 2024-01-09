import styled from "@emotion/styled";
import { device } from "@src/commons/styled";
import { passportColor } from "@src/commons/styled/color";

export const ItemCardListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px 0;
  gap: 15px;
  font-size: 0.8rem;

  & > div {
    flex-direction: column;
  }

  @media ${device.small} {
    font-size: 0.8rem;
  }

  @media ${device.medium} {
    gap: 30px;
    grid-template-columns: repeat(5, 1fr);
    font-size: 1rem;
  }

  @media ${device.large} {
    gap: 30px;
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const ItemListupBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & img {
    width: 40px !important;
  }

  & > div {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ItemCardBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  padding: 10px;
  border-radius: 20px;
  border: 5px solid ${passportColor.shadow};
  text-align: center;
  cursor: pointer;
`;

export const ItemImageBox = styled.div`
  & img {
    width: 100%;
    /* width: 90px;
    @media ${device.small} {
      width: 100px;
    }
    @media ${device.medium} {
      width: 120px;
    } */
  }
`;

export const ItemIcon = styled.img`
  & {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40% !important;
    max-width: 50px;
  }
`;
