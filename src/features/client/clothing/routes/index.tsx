import { Route } from "react-router";
import ClothingMain from "../pages";
import ClothingDetail from "../pages/ClothingDetail";

export const clotingRoutes = () => {
  return (
    <>
      <Route path="/clothing" element={<ClothingMain />} />
      <Route path="/clothing/:name" element={<ClothingDetail />} />
    </>
  );
};
