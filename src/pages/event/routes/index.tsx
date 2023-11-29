import { Route } from "react-router";
import EventMain from "../pages";

export const eventRoutes = () => {
  return (
    <>
      <Route path="/event" element={<EventMain />} />
    </>
  );
};
