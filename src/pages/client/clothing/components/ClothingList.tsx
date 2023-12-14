import { LangEnum } from "@src/lang/enum";
import { ClothingItem } from "../styled";
import LoadingSpinner from "@src/components/loading/LoadingSpinner";
import TradingButton from "@src/components/tradingButton/TradingButton";
import { useClothingList } from "../services/query";
import { useTranslation } from "react-i18next";
import { useClothingKeyword } from "../store/clothingFilter";

const ClothingList = () => {
  const { data: clothingList, isLoading } = useClothingList();
  const keyword = useClothingKeyword();

  const { t } = useTranslation();

  if (isLoading) return <LoadingSpinner />;
  if (!clothingList) return <div>no data</div>;
  return (
    <>
      {clothingList
        .filter(
          (clothing) =>
            keyword === "" ||
            t(`${clothing.category}.${clothing.name}`).includes(keyword)
        )
        .map((clothing) => {
          return (
            <ClothingItem key={clothing.name}>
              <div>
                {t(
                  `${LangEnum.clothing}.${clothing.category}.${clothing.name}`
                )}
              </div>
              <div>
                <TradingButton
                  name={clothing.name}
                  type={`${LangEnum.clothing}.${clothing.category}`}
                  image_url={clothing.variations[0].image_url}
                  amount={1}
                />
              </div>
            </ClothingItem>
          );
        })}
    </>
  );
};

export default ClothingList;
