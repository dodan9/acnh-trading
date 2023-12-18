import { ColorEnum } from "@src/assets/enum";
import { ColorChip, ColorChipListBox } from "@src/components/colorChip/styled";

const ColorFilter = ({
  selectedColor,
  onChange,
}: {
  selectedColor?: ColorEnum[];
  onChange: (color: ColorEnum) => void;
}) => {
  return (
    <ColorChipListBox>
      {Object.values(ColorEnum).map((colorValue) => {
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
