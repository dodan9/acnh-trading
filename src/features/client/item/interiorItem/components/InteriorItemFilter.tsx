import { ColorType } from "@src/assets/enum";
import {
  useInteriorItemFilter,
  useInteriorItemFilterAction,
  useInteriorItemKeyword,
} from "../store/interiorItemFilter";
import { ChangeEvent } from "react";
import SearchFilter from "@src/commons/components/filter/searchFilter/SearchFilter";
import ColorFilter from "@src/commons/components/filter/colorFilter/ColorFilter";

const InteriorItemFilter = () => {
  const keyword = useInteriorItemKeyword();
  const filter = useInteriorItemFilter();
  const { setKeyword, setColor } = useInteriorItemFilterAction();

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };
  const handleColorChange = (color: ColorType) => {
    setColor(color);
  };

  return (
    <>
      <SearchFilter value={keyword} onChange={handleChangeKeyword} />

      <ColorFilter selectedColor={filter.color} onChange={handleColorChange} />
    </>
  );
};

export default InteriorItemFilter;
