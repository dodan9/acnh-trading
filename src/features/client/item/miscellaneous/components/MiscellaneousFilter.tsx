import { ChangeEvent } from "react";
import {
  useMiscellaneousFilterAction,
  useMiscellaneousKeyword,
} from "../store/miscellaneousFilter";
import SearchFilter from "@src/common/components/filter/searchFilter/SearchFilter";

const MiscellaneousFilter = () => {
  const keyword = useMiscellaneousKeyword();
  const { setKeyword } = useMiscellaneousFilterAction();

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };
  return (
    <>
      <SearchFilter value={keyword} onChange={handleChangeKeyword} />
    </>
  );
};

export default MiscellaneousFilter;
