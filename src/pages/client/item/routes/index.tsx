import { Route, Routes } from "react-router";
import ItemMain from "../main";
import FunitureMain from "../furniture/pages";
import InteriorItemMain from "../interiorItem/pages";
import MiscellaneousMain from "../miscellaneous/pages";
import PhotoMain from "../photo/pages";
import RecipeMain from "../recipe/pages";
import ToolsMain from "../tool/pages";

export const itemRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ItemMain />} />
      <Route path="/photo" element={<PhotoMain />} />
      <Route path="/funiture" element={<FunitureMain />} />
      <Route path="/interior" element={<InteriorItemMain />} />
      <Route path="/miscellaneous" element={<MiscellaneousMain />} />
      <Route path="/recipe" element={<RecipeMain />} />
      <Route path="/tools" element={<ToolsMain />} />
    </Routes>
  );
};
