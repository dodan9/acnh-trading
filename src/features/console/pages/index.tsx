import consoleRoutes from "../routes";
import { Wrapper } from "@src/common/styled";

const Console = () => {
  return (
    <>
      <Wrapper>{consoleRoutes()}</Wrapper>
    </>
  );
};

export default Console;
