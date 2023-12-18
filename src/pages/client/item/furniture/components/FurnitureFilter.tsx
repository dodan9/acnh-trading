import { ChangeEvent } from "react";
import {
  useFurnitureFilter,
  useFurnitureFilterAction,
  useFurnitureKeyword,
} from "../store/furnitureFilter";
import { FurnitureCategory } from "../types";
import { ColorEnum } from "@src/assets/enum";
import SearchFilter from "@src/components/filter/searchFilter/SearchFilter";
import ColorFilter from "@src/components/filter/colorFilter/ColorFilter";

const FurnitureFilter = () => {
  const keyword = useFurnitureKeyword();
  const filter = useFurnitureFilter();

  const { setKeyword, setCategory, setColor } = useFurnitureFilterAction();

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleColorChange = (color: ColorEnum) => {
    setColor(color);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value as FurnitureCategory);
  };

  return (
    <>
      <SearchFilter value={keyword} onChange={handleChangeKeyword} />

      <div>
        <select
          name="currentCategory"
          value={filter.category}
          onChange={handleCategoryChange}
        >
          <option value={FurnitureCategory.Housewares}>가구</option>
          <option value={FurnitureCategory.Miscellaneous}>잡화</option>
          <option value={FurnitureCategory.WallMounted}>벽장식</option>
          <option value={FurnitureCategory.CeilingDecor}>천장</option>
        </select>
      </div>

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

export default FurnitureFilter;
