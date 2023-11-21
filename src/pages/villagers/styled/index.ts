import styled from "@emotion/styled";
import { device } from "@src/styled";

export const OptionBox = styled.div`
  padding: 20px 0;
`;

export const VillagerListBox = styled.div`
  display: grid;
  justify-content: center;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, 140px);

  @media ${device.medium} {
    grid-template-columns: repeat(auto-fill, 180px);
  }
`;

export const VillagerCard = styled.div<{
  backgroudColor: string;
  textColor: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #${(props) => (props.backgroudColor.toLowerCase() === "ffffff" ? "eeeeee" : props.backgroudColor)}CC;
  color: #${(props) => props.textColor};
  width: max-content;
  border-radius: 32px;
  padding: 16px 25px;

  @media ${device.medium} {
    gap: 10px;
    padding: 20px 30px;
  }

  & img {
    cursor: pointer;
    width: 90px;

    @media ${device.medium} {
      width: 120px;
    }
  }
  & h3 {
    width: 100%;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 3px;
    border-radius: 25px 40px / 40px 25px;
    background-color: #${(props) => props.backgroudColor};
    font-size: 1rem;

    @media ${device.medium} {
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
