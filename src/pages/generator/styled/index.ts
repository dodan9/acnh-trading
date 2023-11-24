import styled from "@emotion/styled";

export const SectionHeader = styled.div`
  background-color: rgb(141, 210, 199);
`;

export const CartList = styled.ul`
  width: 100%;
`;

export const CartItemSection = styled.li`
  display: flex;
`;
export const CartItemList = styled.ul`
  width: 100%;
`;
export const CartItem = styled.li`
  width: 100%;
  & > div {
    display: flex;
  }
  align-items: center;
  justify-content: space-between;
  img {
    width: 50px;
  }
`;

export const CartItemPriceBox = styled.div``;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: rgb(174, 212, 191);
`;
