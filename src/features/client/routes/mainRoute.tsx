import { Routes, Route } from "react-router-dom";
import villagerRoutes from "@src/features/client/villagers/routes";
import { clotingRoutes } from "@src/features/client/clothing/routes";
import { eventRoutes } from "@src/features/client/event/routes";
import { generatorRoutes } from "@src/features/client/generator/routes";
import { inquiryRoutes } from "@src/features/client/inquiry/routes";

import Main from "@src/features/client/main/Main";
import { lazy } from "react";
import MyIsland from "../myIsland/pages";
const CollectionRoutes = lazy(() => import("../collection"));
const ItemRoutes = lazy(() => import("../item"));

export const mainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route path="/collection/*" element={<CollectionRoutes />} />
      <Route path="/item/*" element={<ItemRoutes />} />

      {villagerRoutes()}
      {clotingRoutes()}
      {eventRoutes()}
      {generatorRoutes()}
      {inquiryRoutes()}

      <Route path="/my-island" element={<MyIsland />} />
    </Routes>
  );
};
