import styled from "@emotion/styled";
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

export const CartItemRow = styled.tr`
  img {
    width: 40px;
  }
  &.last {
    border-bottom: 3px dashed ${passportColor.shadow};
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

export const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  td,
  th {
    text-align: center;
    padding: 10px;
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
  min-width: 280px;
  max-width: 500px;
  margin: 0 auto;
`;

export const CartNoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;