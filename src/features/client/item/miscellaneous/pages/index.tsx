import { Title } from "@src/common/styled";
import MiscellaneousFilter from "../components/MiscellaneousFilter";
import MiscellaneousList from "../components/MiscellaneousList";

const MiscellaneousMain = () => {
  return (
    <>
      <Title>아이템(비가구)</Title>

      <MiscellaneousFilter />
      <MiscellaneousList />
    </>
  );
};

export default MiscellaneousMain;
