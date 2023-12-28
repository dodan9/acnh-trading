import { Title } from "@src/commons/styled";
import FurnitureFilter from "../components/FurnitureFilter";
import FurnitureList from "../components/FurnitureList";

const FurnitureMain = () => {
  return (
    <>
      <Title>가구</Title>

      <FurnitureFilter />
      <FurnitureList />
    </>
  );
};

export default FurnitureMain;
