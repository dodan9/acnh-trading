import Main from "@src/pages/main";
import { Routes, Route } from "react-router-dom";

export const mainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};
