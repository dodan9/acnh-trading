import styled from "@emotion/styled";

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
  padding: 16px;

  @media ${device.medium} {
    padding: 32px;
  }

  @media ${device.large} {
    padding: 64px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  background-color: rgb(245, 242, 228);
  padding: 16px;
  border-radius: 32px;

  @media ${device.small} {
    padding-top: 32px;
  }
  @media ${device.medium} {
    padding: 32px;
    border-radius: 64px;
  }

  @media ${device.large} {
    padding: 64px;
  }
`;
