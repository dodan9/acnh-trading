import { Navigate, Route, Routes } from "react-router";
import ConsoleMain from "../pages/main";

const consoleRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="main" />} />
      <Route path="/main" element={<ConsoleMain />} />
    </Routes>
  );
};

export default consoleRoutes;
