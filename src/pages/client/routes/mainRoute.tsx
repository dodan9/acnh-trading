import { Routes, Route } from "react-router-dom";
import villagerRoutes from "@src/pages/client/villagers/routes";
import { clotingRoutes } from "@src/pages/client/clothing/routes";
import { eventRoutes } from "@src/pages/client/event/routes";
import { generatorRoutes } from "@src/pages/client/generator/routes";
import { inquiryRoutes } from "@src/pages/client/inquiry/routes";

import Main from "@src/pages/client/main/Main";
import { lazy } from "react";
const Collection = lazy(() => import("../collection"));
const Item = lazy(() => import("../item"));

export const mainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route path="/collection/*" element={<Collection />} />
      <Route path="/item/*" element={<Item />} />

      {villagerRoutes()}
      {clotingRoutes()}
      {eventRoutes()}
      {generatorRoutes()}
      {inquiryRoutes()}
    </Routes>
  );
};
