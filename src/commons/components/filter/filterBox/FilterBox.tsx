import { FlexBox } from "@src/commons/styled";
import { ReactNode } from "react";

const FilterBox = ({
  name,
  children,
  direction,
}: {
  name: string;
  children: ReactNode[] | ReactNode;
  direction: "row" | "column";
}) => {
  return (
    <FlexBox padding="0.6rem 0" gap="0.25rem" direction={direction}>
      <div>{name}</div>
      <div>{children}</div>
    </FlexBox>
  );
};

export default FilterBox;
