import styled from "@emotion/styled";
import { FlexBox } from "@src/commons/styled";
import { backgroundColor, passportColor } from "@src/commons/styled/color";
import { useTranslation } from "react-i18next";

const SelectFilter = ({
  options,
  type,
  selectedOptions,
  onSelect,
}: {
  options: string[];
  type: string;
  selectedOptions?: string[];
  onSelect: (option: string) => void;
}) => {
  const { t } = useTranslation();

  return (
    <FlexBox gap="10px">
      {options.map((value) => {
        const isSelected = selectedOptions?.includes(value);

        return (
          <OptionItem
            key={value}
            isSelected={isSelected}
            onClick={() => onSelect(value)}
          >
            {t(`${type}.${value}`)}
          </OptionItem>
        );
      })}
    </FlexBox>
  );
};

export default SelectFilter;

const OptionItem = styled.div<{ isSelected?: boolean }>`
  border: 2px solid
    ${({ isSelected }) =>
      isSelected ? backgroundColor.littleBlue : passportColor.shadow};
  padding: 0.25rem 0.5rem;
  border-radius: 1.5rem;
`;
