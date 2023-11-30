import { Route, Routes } from "react-router";
import ConsoleMain from "../pages/main";
import ConsoleSignIn from "../pages/login";

const consoleRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<ConsoleMain />} />
      <Route path="/signin" element={<ConsoleSignIn />} />
    </Routes>
  );
};

export default consoleRoutes;
