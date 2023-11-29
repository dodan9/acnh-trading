import { Route } from "react-router";
import ClothingList from "../pages";
import ClothingDetail from "../pages/ClothingDetail";

export const clotingRoutes = () => {
  return (
    <>
      <Route path="/clothing" element={<ClothingList />} />
      <Route path="/clothing/:name" element={<ClothingDetail />} />
    </>
  );
};
