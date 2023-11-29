import { Route } from "react-router";
import InquiryMain from "../pages";

export const inquiryRoutes = () => {
  return (
    <>
      <Route path="/inquiry" element={<InquiryMain />} />
    </>
  );
};
