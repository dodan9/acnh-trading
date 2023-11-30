import { consoleMainRoutes } from "../../routes/consoleMainRoutes";
import ConsoleNav from "./nav/ConsoleNav";

const ConsoleMain = () => {
  return (
    <>
      <div>관리자 페이지</div>
      <ConsoleNav />
      {consoleMainRoutes()}
    </>
  );
};

export default ConsoleMain;
