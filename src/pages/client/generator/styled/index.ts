import styled from "@emotion/styled";
import { device } from "@src/styled";
import { backgroundColor, passportColor, textColor } from "@src/styled/color";

export const SectionHeader = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
  color: ${textColor.main};
  background-color: ${backgroundColor.littleBlue};
`;

export const CartHead = styled.thead``;
export const CartBody = styled.tbody``;

export const DeleteButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
export const CartItemRow = styled.tr`
  /* & > td[aria-details="image"]:first-child {
    padding-left: 15px !important;
  } */
  td[aria-details="image"] > div {
    display: flex;
    justify-content: center;
  }
  img {
    width: 40px;
    display: block;
  }

  &.last {
    border-bottom: 3px dashed ${passportColor.shadow};
  }

  @media ${device.medium} {
    img {
      width: 60px;
    }
    div[aria-details="amount"] {
      white-space: pre;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
`;
export const EmptyCell = styled.td`
  text-align: center;
`;

export const PriceCell = styled.td`
  /* background-color: ${passportColor.main};
  z-index: 10;
  border-bottom: 3px dashed ${passportColor.shadow}; */
`;

export const AmountBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 2px;
  align-items: center;
`;
export const AmountCell = styled.div`
  position: relative;

  & div {
    padding: 1px 3px;
  }
  & div[data-html2canvas-ignore] {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    top: 0;
    left: 0;
    padding: 1px 0 0 0;
    & input {
      display: block;
      border: none;
      width: 100%;
      text-align: center;
      border-bottom: 2px solid ${passportColor.shadow};
    }
  }
`;

export const CartTable = styled.table`
  width: 100%;
  position: relative;
  border-collapse: collapse;
  td,
  th {
    text-align: center;
  }
  th {
    padding: 10px;
  }
  td {
    padding: 10px 0;
  }
  margin-bottom: 10px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: ${passportColor.main};
  border: 5px solid ${passportColor.shadow};
  border-radius: 20px;
  overflow: hidden;
  color: ${textColor.light};
  height: fit-content;

  max-width: 600px;
  margin: 0 auto;
`;

export const CartNoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;
  padding: 0 0 10px 0;
`;
