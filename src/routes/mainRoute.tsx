import ClothingList from "@src/pages/clothing/pages";
import Collection from "@src/pages/collection";
import ArtworkList from "@src/pages/collection/artwork/pages";
import BugList from "@src/pages/collection/bug/pages";
import FishList from "@src/pages/collection/fish/pages";
import FossilList from "@src/pages/collection/fossile/pages";
import Main from "@src/pages/main";
import VillagerList from "@src/pages/villagers/pages";
import VillagerDetail from "@src/pages/villagers/pages/VillagerDetail";
import { Routes, Route } from "react-router-dom";

export const mainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route path="/villager" element={<VillagerList />} />
      <Route path="/villager/:name" element={<VillagerDetail />} />

      <Route path="/clothing" element={<ClothingList />} />

      <Route path="/collection" element={<Collection />} />
      <Route path="/collection/artwork" element={<ArtworkList />} />
      <Route path="/collection/bug" element={<BugList />} />
      <Route path="/collection/fish" element={<FishList />} />
      <Route path="/collection/fossil" element={<FossilList />} />
    </Routes>
  );
};
