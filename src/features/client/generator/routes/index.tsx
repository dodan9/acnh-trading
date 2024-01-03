import { lazy } from "react";
import { Route } from "react-router";
const GeneratorMain = lazy(() => import("../pages"));

export const generatorRoutes = () => {
  return (
    <>
      <Route path="/generator" element={<GeneratorMain />} />
    </>
  );
};
