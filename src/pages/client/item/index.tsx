import { Routes, Route } from "react-router";
import FunitureMain from "./furniture/pages";
import InteriorItemMain from "./interiorItem/pages";
import ItemMain from "./main";
import MiscellaneousMain from "./miscellaneous/pages";
import PhotoMain from "./photo/pages";
import RecipeMain from "./recipe/pages";
import ToolsMain from "./tool/pages";
import { Wrapper } from "@src/styled";

const routes = () => {
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

const ItemRoutes = () => {
  return (
    <Wrapper>
      <div>아이템</div>
      {routes()}
    </Wrapper>
  );
};

export default ItemRoutes;
