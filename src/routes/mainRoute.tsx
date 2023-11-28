import ClothingList from "@src/pages/clothing/pages";
import Collection from "@src/pages/collection";
import ArtworkMain from "@src/pages/collection/artwork/pages";
import BugMain from "@src/pages/collection/bug/pages";
import FishMain from "@src/pages/collection/fish/pages";
import FossilMain from "@src/pages/collection/fossile/pages";
import SeaCreatureMain from "@src/pages/collection/seaCreature/pages";
import EventMain from "@src/pages/event/pages";
import GeneratorMain from "@src/pages/generator/pages";
import FunitureMain from "@src/pages/item/furniture/pages";
import ItemMain from "@src/pages/item";
import PhotoMain from "@src/pages/item/photo/pages";
import Main from "@src/pages/main";
import VillagerMain from "@src/pages/villagers/pages";
import VillagerDetail from "@src/pages/villagers/pages/VillagerDetail";
import { Routes, Route } from "react-router-dom";
import InteriorItemMain from "@src/pages/item/interiorItem/pages";
import MiscellaneousMain from "@src/pages/item/miscellaneous/pages";
import RecipeMain from "@src/pages/item/recipe/pages";
import ToolsMain from "@src/pages/item/tool/pages";

export const mainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route path="/villager" element={<VillagerMain />} />
      <Route path="/villager/:name" element={<VillagerDetail />} />

      <Route path="/clothing" element={<ClothingList />} />

      <Route path="/collection" element={<Collection />} />
      <Route path="/collection/artwork" element={<ArtworkMain />} />
      <Route path="/collection/bug" element={<BugMain />} />
      <Route path="/collection/fish" element={<FishMain />} />
      <Route path="/collection/fossil" element={<FossilMain />} />
      <Route path="/collection/sea_creature" element={<SeaCreatureMain />} />

      <Route path="/event" element={<EventMain />} />

      <Route path="/item" element={<ItemMain />} />
      <Route path="/item/photo" element={<PhotoMain />} />
      <Route path="/item/funiture" element={<FunitureMain />} />
      <Route path="/item/interior" element={<InteriorItemMain />} />
      <Route path="/item/miscellaneous" element={<MiscellaneousMain />} />
      <Route path="/item/recipe" element={<RecipeMain />} />
      <Route path="item/tools" element={<ToolsMain />} />

      <Route path="/generator" element={<GeneratorMain />} />
    </Routes>
  );
};
