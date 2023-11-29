import { Route } from "react-router";
import GeneratorMain from "../pages";

export const generatorRoutes = () => {
  return (
    <>
      <Route path="/generator" element={<GeneratorMain />} />
    </>
  );
};
