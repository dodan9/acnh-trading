import { Route } from "react-router";
import VillagerMain from "../pages";
import VillagerDetail from "../pages/VillagerDetail";

export const villagerRoutes = () => {
  return (
    <>
      <Route path="/villager" element={<VillagerMain />} />
      <Route path="/villager/:name" element={<VillagerDetail />} />
    </>
  );
};
