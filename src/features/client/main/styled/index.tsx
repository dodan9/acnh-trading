import styled from "@emotion/styled";
import { device } from "@src/common/styled";
import { passportColor } from "@src/common/styled/color";

export const MenuBox = styled.div`
  max-width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  justify-content: center;
  gap: 10px;
  & img {
    cursor: pointer;
    border: 3px solid transparent;
    border-radius: 24px;
    width: 100%;
    transition: 0.2s;
  }
  & img:hover {
    border: 5px solid ${passportColor.background};
  }

  @media ${device.medium} {
    max-width: 160px;
    & img {
      border-radius: 30px;
    }
  }
`;

export const MenuSection = styled.div`
  display: grid;
  max-width: max-content;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 30px 20px;

  & div:first-of-type {
    grid-column: span 3;
  }

  @media ${device.medium} {
    gap: 20px;
  }
`;
