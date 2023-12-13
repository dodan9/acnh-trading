import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFurnitureList } from "../services/query";
import { FurnitureCategory } from "../types";
import LoadingSpinner from "@src/components/loading/LoadingSpinner";
import TradingButton from "@src/components/tradingButton/TradingButton";

const FurnitureMain = () => {
  const [currentCategory, setCurrentCategory] = useState<FurnitureCategory>(
    FurnitureCategory.Miscellaneous
  );
  const { data: furniture_list, isLoading } = useFurnitureList({
    category: currentCategory,
  });

  const { t } = useTranslation();

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentCategory(event.target.value as FurnitureCategory);
  };

  return (
    <>
      <div>가구 목록</div>

      <div>
        <select
          name="currentCategory"
          value={currentCategory}
          onChange={handleCategoryChange}
        >
          <option value={FurnitureCategory.Housewares}>가구</option>
          <option value={FurnitureCategory.Miscellaneous}>잡화</option>
          <option value={FurnitureCategory.WallMounted}>벽장식</option>
        </select>
      </div>

      {isLoading && <LoadingSpinner />}
      {furniture_list && (
        <div>
          {furniture_list.map((furniture) => {
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

export default FurnitureMain;
