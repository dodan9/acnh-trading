import styled from "@emotion/styled";
import { device } from "@src/styled";

export const OptionBox = styled.div`
  padding: 20px 0;
`;

export const VillagerListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;

  gap: 16px;
  @media ${device.medium} {
    gap: 32px;
  }
`;

export const VillagerCard = styled.div<{
  backgroudColor: string;
  textColor: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  background-color: #${(props) => (props.backgroudColor.toLowerCase() === "ffffff" ? "eeeeee" : props.backgroudColor)}CC;
  color: #${(props) => props.textColor};
  width: 120px;
  aspect-ratio: 1 / 1;
  min-height: 0;
  border-radius: 32px;
  padding: 10px;

  @media ${device.medium} {
    width: 160px;
    padding: 16px;
  }

  & img {
    display: block;
    cursor: pointer;
    width: calc(120px - 2 * 10px - 1.1rem - 8px);
    @media ${device.medium} {
      width: calc(160px - 2 * 16px - 1.3rem - 8px);
    }
  }
  & h3 {
    width: calc(100% - 16px);
    text-align: center;
    padding-top: 5px;
    padding-bottom: 3px;
    border-radius: 25px 40px / 40px 25px;
    background-color: #${(props) => props.backgroudColor};
    font-size: 1rem;
    line-height: 1.1rem;

    @media ${device.medium} {
      width: calc(100% - 32px);
      line-height: 1.3rem;
      font-size: 1.2rem;
    }
  }
  &:hover {
    color: #${(props) => props.backgroudColor};
    background-color: #${(props) => props.textColor};
    transition: 0.2s;
    & h3 {
      background-color: #${(props) => props.backgroudColor}4D;
    }
  }
`;
