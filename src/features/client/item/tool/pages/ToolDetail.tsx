import { useParams } from "react-router";
import { useToolDetailQuery } from "../services/query";
import LoadingSpinner from "@src/commons/components/loading/LoadingSpinner";
import { LangEnum } from "@src/commons/util/lang/enum";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Variation, {
  VariationList,
} from "@src/commons/components/variation/Variation";
import TradingButton from "@src/commons/components/tradingButton/TradingButton";

const ToolDetail = () => {
  const { name } = useParams();
  const { data: tool, isLoading } = useToolDetailQuery({ name });

  const [currentVariant, setCurrentVariant] = useState<string>("");

  const { t } = useTranslation();

  if (isLoading) return <LoadingSpinner />;
  if (!tool) return <div>no data</div>;

  const handleVariantClick = (variant: string) => {
    setCurrentVariant(variant);
  };

  const img_src =
    tool.variations.find((variation) => variation.variation === currentVariant)
      ?.image_url ?? tool.variations[0].image_url;

  return (
    <>
      <div>{t(`${LangEnum.tools}.${tool.name}`)}</div>

      <div>
        <img src={img_src} alt={currentVariant} />
      </div>

      <VariationList>
        {tool.variations.map((variation) => {
          return (
            <Variation
              key={variation.image_url}
              image_url={variation.image_url}
              onClick={() => handleVariantClick(variation.variation)}
            />
          );
        })}
      </VariationList>

      <TradingButton
        name={tool.name}
        type={LangEnum.tools}
        image_url={img_src}
        amount={1}
      />
    </>
  );
};

export default ToolDetail;
