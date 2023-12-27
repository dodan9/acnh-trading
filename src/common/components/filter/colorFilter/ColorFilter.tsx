import { ColorType } from "@src/assets/enum";
import {
  ColorChip,
  ColorChipListBox,
} from "@src/common/components/colorChip/styled";

const ColorFilter = ({
  selectedColor,
  onChange,
}: {
  selectedColor?: ColorType[];
  onChange: (color: ColorType) => void;
}) => {
  return (
    <ColorChipListBox>
      {Object.values(ColorType).map((colorValue) => {
        const isSelected = selectedColor?.includes(colorValue);
        return (
          <ColorChip
            key={colorValue}
            color={colorValue}
            isSelected={isSelected}
          >
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => onChange(colorValue)}
            />
          </ColorChip>
        );
      })}
    </ColorChipListBox>
  );
};

export default ColorFilter;
