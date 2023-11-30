import Main from "@src/pages/main";
import { Routes, Route } from "react-router-dom";
import Console from "@src/pages/console/pages";
import { villagerRoutes } from "@src/pages/villagers/routes";
import { clotingRoutes } from "@src/pages/clothing/routes";
import { collectionRoutes } from "@src/pages/collection/routes";
import { eventRoutes } from "@src/pages/event/routes";
import { itemRoutes } from "@src/pages/item/routes";
import { generatorRoutes } from "@src/pages/generator/routes";
import { inquiryRoutes } from "@src/pages/inquiry/routes";
import ThreeTest from "@src/pages/three/pages";

export const mainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      {villagerRoutes()}
      {clotingRoutes()}
      {collectionRoutes()}
      {eventRoutes()}
      {itemRoutes()}
      {generatorRoutes()}
      {inquiryRoutes()}

      <Route path="/console/*" element={<Console />} />

      <Route path="/three/test" element={<ThreeTest />} />
    </Routes>
  );
};
