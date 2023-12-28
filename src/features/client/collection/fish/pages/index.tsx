import { Title } from "@src/common/styled";
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
