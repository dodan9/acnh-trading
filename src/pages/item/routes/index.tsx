import { Route } from "react-router";
import ItemMain from "..";
import FunitureMain from "../furniture/pages";
import InteriorItemMain from "../interiorItem/pages";
import MiscellaneousMain from "../miscellaneous/pages";
import PhotoMain from "../photo/pages";
import RecipeMain from "../recipe/pages";
import ToolsMain from "../tool/pages";

export const itemRoutes = () => {
  return (
    <>
      <Route path="/item" element={<ItemMain />} />
      <Route path="/item/photo" element={<PhotoMain />} />
      <Route path="/item/funiture" element={<FunitureMain />} />
      <Route path="/item/interior" element={<InteriorItemMain />} />
      <Route path="/item/miscellaneous" element={<MiscellaneousMain />} />
      <Route path="/item/recipe" element={<RecipeMain />} />
      <Route path="/item/tools" element={<ToolsMain />} />
    </>
  );
};
