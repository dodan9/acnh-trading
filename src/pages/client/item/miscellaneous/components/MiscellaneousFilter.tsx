import { ChangeEvent } from "react";
import {
  useMiscellaneousFilterAction,
  useMiscellaneousKeyword,
} from "../store/miscellaneousFilter";

const MiscellaneousFilter = () => {
  const keyword = useMiscellaneousKeyword();
  const { setKeyword } = useMiscellaneousFilterAction();

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };
  return (
    <>
      <div>검색:</div>
      <div>
        <input value={keyword} onChange={handleChangeKeyword} />
      </div>
    </>
  );
};

export default MiscellaneousFilter;
