import { ColorType } from "@src/assets/enum";
import {
  useInteriorItemFilter,
  useInteriorItemFilterAction,
  useInteriorItemKeyword,
} from "../store/interiorItemFilter";
import { ChangeEvent } from "react";
import SearchFilter from "@src/common/components/filter/searchFilter/SearchFilter";
import ColorFilter from "@src/common/components/filter/colorFilter/ColorFilter";

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

      <div>
        <div>색상</div>

        <ColorFilter
          selectedColor={filter.color}
          onChange={handleColorChange}
        />
      </div>
    </>
  );
};

export default InteriorItemFilter;
