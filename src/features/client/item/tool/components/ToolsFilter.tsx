import SearchFilter from "@src/commons/components/filter/searchFilter/SearchFilter";
import { useToolsFilterAction, useToolsKeyword } from "../store/toolFilter";
import { ChangeEvent } from "react";

const ToolsFilter = () => {
  const keyword = useToolsKeyword();
  const { setKeyword } = useToolsFilterAction();

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  return (
    <>
      <SearchFilter value={keyword} onChange={handleChangeKeyword} />
    </>
  );
};

export default ToolsFilter;
