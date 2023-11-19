import Main from "@src/pages/main";
import Villagers from "@src/pages/villagers/pages";
import { Routes, Route } from "react-router-dom";

export const mainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/villagers' element={<Villagers />} />
    </Routes>
  );
};
