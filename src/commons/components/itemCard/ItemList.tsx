import { ReactNode } from "react";
import { ItemCardListBox, ItemListupBox } from "./styled";
import ListOptionFilter from "../filter/listOption/ListOptionFilter";
import { useListOption } from "@src/commons/store/listOptionStore";

const ItemList = ({ children }: { children: ReactNode[] }) => {
  const isList = useListOption();

  return (
    <>
      <ListOptionFilter />

      {isList ? (
        <ItemListupBox>{children}</ItemListupBox>
      ) : (
        <ItemCardListBox>{children}</ItemCardListBox>
      )}
    </>
  );
};

export default ItemList;
