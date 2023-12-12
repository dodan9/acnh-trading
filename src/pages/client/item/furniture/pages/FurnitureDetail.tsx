import { useParams } from "react-router";
import { useFurnitureDetail } from "../services/query";
import TradingButton from "@src/components/tradingButton/TradingButton";

const FurnitureDetail = () => {
  const { name } = useParams();
  const { data: furniture } = useFurnitureDetail({ name });

  if (!furniture) return;
  return (
    <>
      <div>{furniture.name}</div>
      <TradingButton
        name={furniture.name}
        type={furniture.category.toLowerCase()}
        image_url={furniture.variations[0].image_url}
        amount={1}
      />
    </>
  );
};

export default FurnitureDetail;
