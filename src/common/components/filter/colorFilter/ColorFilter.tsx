import { ColorType } from "@src/assets/enum";
import { ColorChip } from "@src/common/components/colorChip/styled";
import { FlexBox } from "@src/common/styled";

const ColorFilter = ({
  selectedColor,
  onChange,
}: {
  selectedColor?: ColorType[];
  onChange: (color: ColorType) => void;
}) => {
  return (
    <FlexBox gap="10px">
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
    </FlexBox>
  );
};

export default ColorFilter;
