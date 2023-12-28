import InteriorItemFilter from "../components/InteriorItemFilter";
import InteriorItemList from "../components/InteriorItemList";

const InteriorItemMain = () => {
  return (
    <>
      <div>벽지 / 바닥 / 러그</div>

      <InteriorItemFilter />
      <InteriorItemList />
    </>
  );
};

export default InteriorItemMain;
