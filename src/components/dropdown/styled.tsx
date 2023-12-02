import styled from "@emotion/styled";
import { passportColor } from "@src/pages/client/villagers/styled/VillagerDetailStyled";

export const DropdownSection = styled.div`
  position: relative;
`;
export const DropdownTitle = styled.div``;

export const DropdownList = styled.div<{ isOpen: boolean }>`
  position: absolute;
  bottom: -10px;
  display: ${(props) => (props.isOpen ? "flex" : "hidden")};
  flex-direction: column;
  gap: 5px;
  border: 5px solid ${passportColor.shadow};
`;

export const DropdownItem = styled.div``;
