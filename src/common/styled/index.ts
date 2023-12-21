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
