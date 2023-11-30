import { Route } from "react-router";
import VillagerDetail from "../pages/VillagerDetail";
import { lazy } from "react";
const VillagerMain = lazy(() => import("../pages"));

const villagerRoutes = () => {
  return (
    <>
      <Route path="/villager" element={<VillagerMain />} />
      <Route path="/villager/:name" element={<VillagerDetail />} />
    </>
  );
};

export default villagerRoutes;
