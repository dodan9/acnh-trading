import { ReactNode } from "react";
import { ItemCardListBox, ItemListupBox } from "./styled";
import ListOptionFilter from "../filter/listOption/ListOptionFilter";
import { useListOption } from "@src/commons/store/listOptionStore";

const ItemList = ({ children }: { children: ReactNode[] }) => {
  const isList = useListOption();

  if (isList)
    return (
      <ItemListupBox>
        <ListOptionFilter />
        {children}
      </ItemListupBox>
    );
  else
    return (
      <ItemCardListBox>
        <ListOptionFilter />
        {children}
      </ItemCardListBox>
    );
};

export default ItemList;
