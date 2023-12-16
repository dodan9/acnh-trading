import { ChangeEvent } from "react";
import {
  useFurnitureFilter,
  useFurnitureFilterAction,
  useFurnitureKeyword,
} from "../store/furnitureFilter";
import { FurnitureCategory } from "../types";
import { ColorEnum } from "@src/assets/enum";
import { ColorChip, ColorChipListBox } from "@src/components/colorChip/styled";

const FurnitureFilter = () => {
  const keyword = useFurnitureKeyword();
  const filter = useFurnitureFilter();

  const { setKeyword, setCategory, setColor } = useFurnitureFilterAction();

  const handleKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
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
      <div>
        <input value={keyword} onChange={handleKeywordChange} />
      </div>

      <div>
        <select
          name='currentCategory'
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
        <ColorChipListBox>
          {Object.values(ColorEnum).map((color) => {
            const isSelected = filter.color?.includes(color);
            return (
              <ColorChip color={color} key={color}>
                <input
                  type='checkbox'
                  checked={isSelected}
                  onChange={() => handleColorChange(color)}
                />
              </ColorChip>
            );
          })}
        </ColorChipListBox>
      </div>
    </>
  );
};

export default FurnitureFilter;
