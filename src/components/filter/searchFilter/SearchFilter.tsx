import { ChangeEvent } from "react";

const SearchFilter = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <div>검색:</div>
      <div>
        <input value={value} onChange={onChange} />
      </div>
    </>
  );
};

export default SearchFilter;
