import { Wrapper } from "@src/styled";

import ClothingFilter from "../components/ClothingFilter";
import ClothingList from "../components/ClothingList";

const ClothingMain = () => {
  return (
    <Wrapper>
      <div>옷</div>

      <ClothingFilter />
      <ClothingList />
    </Wrapper>
  );
};

export default ClothingMain;
