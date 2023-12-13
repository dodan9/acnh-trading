import { useTranslation } from "react-i18next";
import { useFurnitureList } from "../services/query";
import LoadingSpinner from "@src/components/loading/LoadingSpinner";
import TradingButton from "@src/components/tradingButton/TradingButton";
import { useFurnitureKeyword } from "../store/furnitureFilter";

const FurnitureList = () => {
  const { data: furniture_list, isLoading } = useFurnitureList();

  const { t } = useTranslation();
  const keyword = useFurnitureKeyword();

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {furniture_list && (
        <div>
          {furniture_list
            .filter(
              (furniture) =>
                keyword === "" ||
                t(
                  `${furniture.category.toLowerCase()}.${furniture.name}`
                ).includes(keyword)
            )
            .map((furniture) => {
              if (furniture.category)
                return (
                  <div key={furniture.name}>
                    {t(`${furniture.category.toLowerCase()}.${furniture.name}`)}
                    <TradingButton
                      name={furniture.name}
                      type={furniture.category.toLowerCase()}
                      image_url={furniture.variations[0].image_url}
                      amount={1}
                    />
                  </div>
                );
            })}
        </div>
      )}
    </>
  );
};

export default FurnitureList;
