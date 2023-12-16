import { ColorEnum } from "@src/assets/enum";
import {
  useInteriorItemFilter,
  useInteriorItemFilterAction,
  useInteriorItemKeyword,
} from "../store/interiorItemFilter";
import { ChangeEvent } from "react";
import { ColorChip, ColorChipListBox } from "@src/components/colorChip/styled";

const InteriorItemFilter = () => {
  const keyword = useInteriorItemKeyword();
  const filter = useInteriorItemFilter();
  const { setKeyword, setColor } = useInteriorItemFilterAction();

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };
  const handleColorChange = (color: ColorEnum) => {
    setColor(color);
  };

  return (
    <>
      <div>
        검색:
        <input value={keyword} onChange={handleChangeKeyword} />
      </div>

      <div>
        <div>색상</div>
        <ColorChipListBox>
          {Object.values(ColorEnum).map((color) => {
            const isSelected = filter.color?.includes(color);
            return (
              <ColorChip color={color} key={color} isSelected={isSelected}>
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

export default InteriorItemFilter;
