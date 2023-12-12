import { Routes, Route } from "react-router";
import ArtworkMain from "./artwork/pages";
import BugMain from "./bug/pages";
import FishMain from "./fish/pages";
import FossilMain from "./fossile/pages";
import CollectionMain from "./main";
import SeaCreatureMain from "./seaCreature/pages";
import BugDetail from "./bug/components/BugDetail";

export const collectionRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<CollectionMain />} />

      <Route path="/artwork" element={<ArtworkMain />} />

      <Route path="/bug" element={<BugMain />} />
      <Route path="/bug/:name" element={<BugDetail />} />

      <Route path="/fish" element={<FishMain />} />

      <Route path="/fossil" element={<FossilMain />} />

      <Route path="/sea_creature" element={<SeaCreatureMain />} />
    </Routes>
  );
};
