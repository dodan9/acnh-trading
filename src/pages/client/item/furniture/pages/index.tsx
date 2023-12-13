import FurnitureFilter from "../components/FurnitureFilter";
import FurnitureList from "../components/FurnitureList";

const FurnitureMain = () => {
  return (
    <>
      <div>가구 목록</div>

      <FurnitureFilter />
      <FurnitureList />
    </>
  );
};

export default FurnitureMain;
