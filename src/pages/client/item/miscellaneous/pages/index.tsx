import MiscellaneousFilter from "../components/MiscellaneousFilter";
import MiscellaneousList from "../components/MiscellaneousList";

const MiscellaneousMain = () => {
  return (
    <>
      <div>아이템(비가구)</div>

      <MiscellaneousFilter />
      <MiscellaneousList />
    </>
  );
};

export default MiscellaneousMain;
