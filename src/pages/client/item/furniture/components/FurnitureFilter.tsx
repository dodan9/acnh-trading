import { ChangeEvent } from "react";
import {
  useFurnitureFilter,
  useFurnitureFilterAction,
  useFurnitureKeyword,
} from "../store/furnitureFilter";
import { FurnitureCategory } from "../types";

const FurnitureFilter = () => {
  const keyword = useFurnitureKeyword();
  const filter = useFurnitureFilter();

  const { setKeyword, setCategory, setColor } = useFurnitureFilterAction();

  const handleKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };
  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value as FurnitureCategory);
  };

  return (
    <>
      <div>
        <input value={keyword} onChange={handleKeywordChange} />
      </div>

      <div>
        <select
          name="currentCategory"
          value={filter.category}
          onChange={handleCategoryChange}
        >
          <option value={FurnitureCategory.Housewares}>가구</option>
          <option value={FurnitureCategory.Miscellaneous}>잡화</option>
          <option value={FurnitureCategory.WallMounted}>벽장식</option>
        </select>
      </div>
    </>
  );
};

export default FurnitureFilter;
