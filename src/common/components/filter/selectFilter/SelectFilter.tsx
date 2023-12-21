import styled from "@emotion/styled";
import { backgroundColor } from "@src/common/styled/color";
import {
  createFuzzyMatcher,
  highlightText,
} from "@src/common/util/searchPattern";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";

const SelectFilter = ({
  name,
  setValue,
  options,
}: {
  name: string;
  setValue: (value: string) => void;
  options: { key: string; value: string }[];
}) => {
  const [keyword, setKeyword] = useState<string>("");
  const [isOptionOpen, setIsOptionOpen] = useState<boolean>(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(-1);
  const regex = createFuzzyMatcher(keyword);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
    setSelectedOptionIndex(0);
    if (event.target.value === "") {
      setSelectedOptionIndex(-1);
    }
  };

  const handleChangeOption = (key: string, value: string) => {
    setValue(key);
    setKeyword(value);
    setIsOptionOpen(false);
    if (inputRef.current) inputRef.current.blur();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const filteredOptions = options.filter((option) =>
        regex.test(option.value)
      );
      const newIndex = selectedOptionIndex + direction;

      if (newIndex >= 0 && newIndex < filteredOptions.length) {
        setSelectedOptionIndex(newIndex);
      }
    } else if (event.key === "Enter") {
      const filteredOptions = options.filter((option) =>
        regex.test(option.value)
      );
      if (selectedOptionIndex !== -1) {
        handleChangeOption(
          filteredOptions[selectedOptionIndex].key,
          filteredOptions[selectedOptionIndex].value
        );
      } else if (keyword === "") {
        setValue("");
      }
    }

    event.stopPropagation();
  };

  return (
    <SelectFilterBox>
      <div>{name}</div>
      <SelectInput
        ref={inputRef}
        value={keyword}
        onChange={handleChangeKeyword}
        onFocus={() => setIsOptionOpen(true)}
        onKeyDown={handleKeyDown}
      />

      {isOptionOpen && (
        <SelectOptionListBox>
          {options
            .filter((option) => {
              return regex.test(option.value);
            })
            .map((option, index) => {
              const isSelected = index === selectedOptionIndex;
              return (
                <SelectOption
                  isSelected={isSelected}
                  dangerouslySetInnerHTML={{
                    __html: highlightText(option.value, regex, keyword),
                  }}
                  key={option.key}
                  onClick={() => handleChangeOption(option.key, option.value)}
                />
              );
            })}
        </SelectOptionListBox>
      )}
    </SelectFilterBox>
  );
};

export default SelectFilter;

const SelectFilterBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectInput = styled.input``;

const SelectOptionListBox = styled.div`
  display: flex;
  gap: 3px;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  & > div:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  max-height: 200px;
  overflow-y: auto;
`;

const SelectOption = styled.div<{ isSelected: boolean }>`
  ${({ isSelected }) =>
    isSelected && `background-color: ${backgroundColor.light};`}
`;
