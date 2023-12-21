import { useNavigate } from "react-router";
import TradingButton, { TradingItemType } from "../tradingButton/TradingButton";
import { ItemCardBox, ItemIcon, ItemImageBox } from "./styled";
import { LangEnum } from "@src/common/util/lang/enum";
import PaperRecipe from "@src/assets/icons/inventory_icons/PaperRecipe.png";

export interface ItemProps {
  item: TradingItemType;
  ko_name: string;
  isList?: boolean;
}
export const ItemCard = ({ item, ko_name }: ItemProps) => {
  const navigate = useNavigate();

  return (
    <ItemCardBox onClick={() => navigate(item.name)}>
      <ItemImageBox>
        <img src={item.image_url} alt={ko_name} />
        {item.type === LangEnum.recipe && <ItemIcon src={PaperRecipe} />}
      </ItemImageBox>
      <div>{ko_name}</div>
      <div>
        <TradingButton
          name={item.name}
          type={item.type}
          image_url={item.image_url}
          amount={item.amount}
        />
      </div>
    </ItemCardBox>
  );
};
