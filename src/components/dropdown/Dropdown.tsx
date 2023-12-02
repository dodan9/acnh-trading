import { useState } from "react";
import {
  DropdownItem,
  DropdownList,
  DropdownSection,
  DropdownTitle,
} from "./styled";

export const Dropdown = ({
  title,
  items,
  onChange,
}: {
  title: string;
  items: { name: string; value: string }[];
  onChange: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleListVisible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownSection>
      <DropdownTitle onClick={handleListVisible}>
        {title} {isOpen ? "v" : "^"}
      </DropdownTitle>

      <DropdownList isOpen={isOpen}>
        {items.map((item) => {
          return (
            <DropdownItem key={item.value} onClick={() => onChange(item.value)}>
              {item.name}
            </DropdownItem>
          );
        })}
      </DropdownList>
    </DropdownSection>
  );
};
