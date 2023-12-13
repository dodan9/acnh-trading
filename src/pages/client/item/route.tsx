import { Routes, Route } from "react-router";
import InteriorItemMain from "./interiorItem/pages";
import ItemMain from "./main";
import MiscellaneousMain from "./miscellaneous/pages";
import PhotoMain from "./photo/pages";
import RecipeMain from "./recipe/pages";
import ToolsMain from "./tool/pages";
import FurnitureDetail from "./furniture/pages/FurnitureDetail";
import FurnitureMain from "./furniture/pages";

export const itemRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ItemMain />} />
      <Route path="/photo" element={<PhotoMain />} />

      <Route path="/furniture" element={<FurnitureMain />} />
      <Route path="/furniture/:name" element={<FurnitureDetail />} />

      <Route path="/interior" element={<InteriorItemMain />} />

      <Route path="/miscellaneous" element={<MiscellaneousMain />} />

      <Route path="/recipe" element={<RecipeMain />} />

      <Route path="/tools" element={<ToolsMain />} />
    </Routes>
  );
};
