import { useParams } from "react-router";
import { useFurnitureDetail } from "../services/query";
import TradingButton from "@src/common/components/tradingButton/TradingButton";
import { Title } from "@src/common/styled";
import { useEffect, useState } from "react";
import LoadingSpinner from "@src/common/components/loading/LoadingSpinner";
import Variation, {
  VariationList,
} from "@src/common/components/variation/Variation";
import { useTranslation } from "react-i18next";

const FurnitureDetail = () => {
  const { name } = useParams();
  const { data: furniture, isLoading } = useFurnitureDetail({ name });
  const { t } = useTranslation();

  const [currentVariant, setCurrentVariant] = useState<string>("");

  const handleChangeVariation = (variation: string) => {
    setCurrentVariant(variation);
  };

  useEffect(() => {
    if (furniture) {
      setCurrentVariant(furniture.variations[0].variation);
    }
  }, [furniture]);

  if (isLoading) return <LoadingSpinner />;
  if (!furniture) return <div>no data</div>;

  const img_src =
    furniture.variations.find(
      (variation) => variation.variation === currentVariant
    )?.image_url ?? furniture.variations[0].image_url;

  return (
    <>
      <Title>
        {t(`${furniture.category.toLowerCase()}.${furniture.name}`)}
      </Title>

      <div>
        <img src={img_src} alt={furniture.name} />
      </div>

      <VariationList>
        {furniture.variations.map((v) => {
          return (
            <Variation
              onClick={() => handleChangeVariation(v.variation)}
              image_url={v.image_url}
              key={v.image_url}
            />
          );
        })}
      </VariationList>

      <TradingButton
        name={furniture.name}
        type={furniture.category.toLowerCase()}
        image_url={img_src}
        amount={1}
      />
    </>
  );
};

export default FurnitureDetail;
