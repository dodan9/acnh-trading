import { ChangeEvent } from "react";
import { useVillagerName, useVillagerNameAction } from "../store/keyword";

const VillagerSearch = () => {
  const name = useVillagerName();
  const { setName } = useVillagerNameAction();

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <>
      <div>검색</div>

      <input value={name} onChange={handleNameChange} />
    </>
  );
};

export default VillagerSearch;
