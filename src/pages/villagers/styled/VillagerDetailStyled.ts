import styled from "@emotion/styled";
import { device } from "@src/styled";

export const passportColor = {
  shadow: "rgb(227, 218, 200)",
  main: "rgb(250, 248, 225)",
  background: "rgb(178, 173, 151)",
};

export const PassportBack = styled.div`
  background-color: ${passportColor.background};
  width: 100%;
  height: 100%;
  padding: 0 20px 60px 20px;
  border-radius: 32px;

  @media ${device.medium} {
    border-radius: 64px;
  }
`;

export const PassportTop = styled.div`
  text-align: center;
  padding: 10px 0;
`;

export const PassportBotom = styled.div`
  padding: 10px;
`;

export const PassportImageBox = styled.div<{ themeColor: string }>`
  width: 100%;
  aspect-ratio: 1/1;
  padding: 20px;

  @media ${device.medium} {
    margin: 40px 0 40px 40px;
    flex: 3;
  }

  & img:first-of-type {
    display: block;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    object-fit: contain;
    border: 10px solid ${passportColor.main};
    border-radius: 64px;
    padding: 10px;
    background-color: #${(props) => props.themeColor}80;
  }
`;

export const PassportQuote = styled.div`
  border-radius: 10px;
  background-color: ${passportColor.main};
  padding: 10px;
  margin-right: 40px;
`;
export const PassportInfoBox = styled.div`
  width: 100%;
  padding: 15px 0;

  @media ${device.medium} {
    flex: 5;
  }

  & div:not(:first-of-type) {
    width: 100%;
    border-bottom: 2px solid ${passportColor.main};
    padding: 15px 0 5px 5px;

    @media ${device.medium} {
      width: calc(100% - 40px);
    }
  }
  & div:last-of-type {
    border: none;
  }
`;

export const HouseInfo = styled.div`
  & img {
    width: 200px;
  }
`;
export const PassportContent = styled.div`
  background-color: rgb(227, 236, 219);
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: column;

  @media ${device.small} {
    flex-direction: row;
  }
  @media ${device.medium} {
    gap: 20px;
    flex-direction: row;
  }
`;

export const Passport = styled.div`
  background-color: ${passportColor.main};
  border-radius: 0 0 40px 40px;
  border-bottom: 5px solid ${passportColor.shadow};
  margin: 0 auto;
  width: 80%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  font-size: larger;
`;
