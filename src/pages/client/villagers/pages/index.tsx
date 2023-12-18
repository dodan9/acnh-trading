import { Title, Wrapper } from "@src/styled";
import VillagerFilter from "../components/VillagerFilter";
import VillagerList from "../components/VillagerList";

const VillagerMain = () => {
  return (
    <Wrapper>
      <Title>주민 목록</Title>

      <VillagerFilter />
      <VillagerList />
    </Wrapper>
  );
};

export default VillagerMain;
