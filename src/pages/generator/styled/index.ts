import styled from "@emotion/styled";
import { passportColor } from "@src/pages/villagers/styled/VillagerDetailStyled";
import { backgroundColor, textColor } from "@src/styled/color";

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
    width: 50px;
  }
  border-bottom: 3px dashed ${passportColor.shadow};
`;
export const EmptyCell = styled.td`
  text-align: center;
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
`;
