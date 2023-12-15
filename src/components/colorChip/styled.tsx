import styled from "@emotion/styled";

export const ColorChip = styled.label<{ color: string; isSelected?: boolean }>`
  display: block;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  ${(props) => props.isSelected && "border: 3px solid #fff"}

  & input {
    z-index: -1;
  }
`;

export const ColorChipListBox = styled.div`
  display: flex;
`;
