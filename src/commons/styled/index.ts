import styled from "@emotion/styled";
import { backgroundColor } from "./color";

const size = {
  // ss: '320px',
  small: "375px",
  // sl: '425px',
  medium: "768px",
  large: "1024px",
};

export const device = {
  small: `(min-width: ${size.small})`,
  medium: `(min-width: ${size.medium})`,
  large: `(min-width: ${size.large})`,
};

export const Container = styled.div`
  padding: 16px 0;

  @media ${device.medium} {
    padding: 32px 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${backgroundColor.light};
  padding: 40px 24px;
  border-radius: 50% / 32px;

  /* @media ${device.small} {
    padding-top: 32px;
  } */
  @media ${device.medium} {
    padding: 56px 32px;
    border-radius: 50% / 48px;
  }

  @media ${device.large} {
    padding: 72px 48px;
    border-radius: 50% / 64px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.3rem;
`;

export const FlexBox = styled.div<{
  width?: number;
  height?: number;
  direction?: "row" | "column";
  justifyContent?:
    | "center"
    | "space-between"
    | "space-around"
    | "flex-start"
    | "flex-end";
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch";
  gap?: string;
  padding?: string;
}>`
  display: flex;
  flex-wrap: wrap;
  ${({ width }) => (width ? `width: ${width}px` : "")};
  ${({ height }) => (height ? `height: ${height}px` : "")};
  ${({ gap }) => (gap ? `gap: ${gap}` : "")};
  ${({ padding }) => (padding ? `padding: ${padding}` : "")};
  ${({ direction }) => (direction ? `flex-direction: ${direction}` : "")};
  ${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent}` : ""};
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems}` : "")};
`;
