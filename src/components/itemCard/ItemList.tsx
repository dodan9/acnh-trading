import { ReactNode } from "react";
import { ItemCardListBox, ItemListupBox } from "./styled";
import { useListOption } from "@src/common/listOptionStore";

const ItemList = ({ children }: { children: ReactNode[] }) => {
  const isList = useListOption();

  if (isList) return <ItemListupBox>{children}</ItemListupBox>;
  else return <ItemCardListBox>{children}</ItemCardListBox>;
};

export default ItemList;
