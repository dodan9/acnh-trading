import { useNavigate } from "react-router";
import TradingButton, { TradingItemType } from "../tradingButton/TradingButton";
import { ItemCardBox, ItemImageBox } from "./styled";

interface Props {
  item: TradingItemType;
  ko_name: string;
}
export const ItemCard = ({ item, ko_name }: Props) => {
  const navigate = useNavigate();

  return (
    <ItemCardBox onClick={() => navigate(item.name)}>
      <ItemImageBox>
        <img src={item.image_url} alt={ko_name} />
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
