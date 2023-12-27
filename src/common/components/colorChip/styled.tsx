import styled from "@emotion/styled";

export const ColorChip = styled.label<{ color: string; isSelected?: boolean }>`
  display: block;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  & input {
    z-index: -1;
  }

  & input[type="checkbox"] {
    z-index: -1;
  }

  ${(props) => props.color === "Beige" && "border: 1px solid gray"}
  ${(props) =>
    props.color === "Colorful" &&
    "background: linear-gradient(45deg, #ff0000, #ff9900, #ffff00, #33cc33, #3399ff, #cc33ff, #ff00cc);"}
  ${(props) => props.isSelected && "border: 3px solid #fff"}
`;
