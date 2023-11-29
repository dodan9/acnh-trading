import { Route } from "react-router";
import Collection from "..";
import ArtworkMain from "../artwork/pages";
import BugMain from "../bug/pages";
import FishMain from "../fish/pages";
import FossilMain from "../fossile/pages";
import SeaCreatureMain from "../seaCreature/pages";

export const collectionRoutes = () => {
  return (
    <>
      <Route path="/collection" element={<Collection />} />
      <Route path="/collection/artwork" element={<ArtworkMain />} />
      <Route path="/collection/bug" element={<BugMain />} />
      <Route path="/collection/fish" element={<FishMain />} />
      <Route path="/collection/fossil" element={<FossilMain />} />
      <Route path="/collection/sea_creature" element={<SeaCreatureMain />} />
    </>
  );
};
