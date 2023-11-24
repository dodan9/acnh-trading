import { Wrapper } from "@src/styled";
import VillagerSearch from "../components/VillagerSearch";
import VillagerFilter from "../components/VillagerFilter";
import VillagerList from "../components/VillagerList";

const VillagerMain = () => {
  return (
    <Wrapper>
      <div>주민 목록</div>

      <VillagerSearch />
      <VillagerFilter />
      <VillagerList />
    </Wrapper>
  );
};

export default VillagerMain;
