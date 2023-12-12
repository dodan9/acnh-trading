import { Title, Wrapper } from "@src/styled";
import { itemRoutes } from "./route";

const ItemRoutes = () => {
  return (
    <Wrapper>
      <Title>아이템</Title>
      {itemRoutes()}
    </Wrapper>
  );
};

export default ItemRoutes;
