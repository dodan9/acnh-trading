import { ChangeEvent } from "react";
import FilterBox from "../filterBox/FilterBox";

const SearchFilter = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <FilterBox name="검색" direction="row">
      <input value={value} onChange={onChange} />
    </FilterBox>
  );
};

export default SearchFilter;
