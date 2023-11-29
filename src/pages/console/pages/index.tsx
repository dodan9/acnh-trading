import consoleRoutes from "../routes";
import { Wrapper } from "@src/styled";

const Console = () => {
  return (
    <>
      <Wrapper>{consoleRoutes()}</Wrapper>
    </>
  );
};

export default Console;
