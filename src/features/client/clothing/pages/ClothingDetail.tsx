import { Title, Wrapper } from "@src/commons/styled";
import { useParams } from "react-router";
import { useClothingDetail } from "../services/query";
import { useTranslation } from "react-i18next";
import { LangEnum } from "@src/commons/util/lang/enum";
import LoadingSpinner from "@src/commons/components/loading/LoadingSpinner";
import TradingButton from "@src/commons/components/tradingButton/TradingButton";
import { useEffect, useState } from "react";
import Variation, {
  VariationList,
} from "@src/commons/components/variation/Variation";

const ClothingDetail = () => {
  const { name } = useParams();
  const { data: clothing, isLoading } = useClothingDetail({ name });
  const { t } = useTranslation();

  const [currentVariant, setCurrentVariant] = useState<string>("");

  const handleChangeVariation = (variation: string) => {
    setCurrentVariant(variation);
  };

  useEffect(() => {
    if (clothing) {
      setCurrentVariant(clothing.variations[0].variation);
    }
  }, [clothing]);

  if (isLoading) return <LoadingSpinner />;
  if (!clothing) return <div>no data</div>;

  const img_src =
    clothing.variations.find(
      (variation) => variation.variation === currentVariant
    )?.image_url ?? clothing.variations[0].image_url;

  return (
    <Wrapper>
      <Title>
        {t(`${LangEnum.clothing}.${clothing.category}.${clothing.name}`)}
      </Title>

      <div>
        <div>
          <img src={img_src} alt={clothing.name} />
        </div>

        <div>{t(`${LangEnum.clothing}.category.${clothing.category}`)}</div>
      </div>

      <VariationList>
        {clothing.variations.map((v) => {
          return (
            <Variation
              onClick={() => handleChangeVariation(v.variation)}
              image_url={v.image_url}
              key={v.image_url}
            />
          );
        })}
      </VariationList>

      <div>
        <TradingButton
          name={clothing.name}
          type={`${LangEnum.clothing}.${clothing.category}`}
          image_url={img_src}
          amount={1}
        />
      </div>
    </Wrapper>
  );
};
export default ClothingDetail;
