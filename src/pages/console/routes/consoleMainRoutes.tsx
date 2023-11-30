import { Route, Navigate, Routes } from "react-router";
import ConsoleInquiryMain from "../pages/inquiry/pages";
import ConsoleHome from "../pages/main/home/ConsoleHome";

export const consoleMainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="/home" element={<ConsoleHome />} />
      <Route path="/inquiry" element={<ConsoleInquiryMain />} />
    </Routes>
  );
};
