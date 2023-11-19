import Main from "@src/pages/main";
import Villagers from "@src/pages/villagers/pages";
import VillagerDetail from "@src/pages/villagers/pages/VillagerDetail";
import { Routes, Route } from "react-router-dom";

export const mainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/villagers' element={<Villagers />} />
      <Route path='/villagers/:name' element={<VillagerDetail />} />
    </Routes>
  );
};
