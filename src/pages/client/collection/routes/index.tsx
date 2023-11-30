import { Route, Routes } from "react-router";
import CollectionMain from "../main";
import ArtworkMain from "../artwork/pages";
import BugMain from "../bug/pages";
import FishMain from "../fish/pages";
import FossilMain from "../fossile/pages";
import SeaCreatureMain from "../seaCreature/pages";

export const collectionRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CollectionMain />} />
      <Route path="/artwork" element={<ArtworkMain />} />
      <Route path="/bug" element={<BugMain />} />
      <Route path="/fish" element={<FishMain />} />
      <Route path="/fossil" element={<FossilMain />} />
      <Route path="/sea_creature" element={<SeaCreatureMain />} />
    </Routes>
  );
};
