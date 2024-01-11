import { Title } from "@src/commons/styled";
import ToolsList from "../components/ToolsList";
import ToolsFilter from "../components/ToolsFilter";

const ToolsMain = () => {
  return (
    <>
      <Title>도구</Title>

      <ToolsFilter />
      <ToolsList />
    </>
  );
};

export default ToolsMain;
