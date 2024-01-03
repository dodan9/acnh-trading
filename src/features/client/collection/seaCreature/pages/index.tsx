import SeaCreatureFilter from "../components/SeaCreatureFilter";
import SeaCreatureList from "../components/SeaCreatureList";

const SeaCreatureMain = () => {
  return (
    <>
      <div>해산물</div>

      <SeaCreatureFilter />
      <SeaCreatureList />
    </>
  );
};

export default SeaCreatureMain;
