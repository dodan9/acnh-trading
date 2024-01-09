import { Wrapper } from "@src/common/styled";

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
