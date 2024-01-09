import { Title } from "@src/commons/styled";
import FishFilter from "../components/FishFilter";
import FishList from "../components/FishList";

const FishMain = () => {
  return (
    <>
      <Title>물고기</Title>

      <FishFilter />
      <FishList />
    </>
  );
};

export default FishMain;
