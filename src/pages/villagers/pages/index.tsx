import { useVillagerListQuery } from "../services/query";

const Villagers = () => {
  const { data: villager_list } = useVillagerListQuery();
  return (
    <>
      <div>주민들</div>
    </>
  );
};

export default Villagers;
