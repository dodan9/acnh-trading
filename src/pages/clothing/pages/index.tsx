import { Wrapper } from "@src/styled";
import { useClothingList } from "../services/query";
import { useEffect, useState } from "react";
import {
  ClothingCategory,
  ClothingFilterType,
  ClothingLabelTheme,
  ClothingStyle,
} from "../types";
import { useTranslation } from "react-i18next";
import { LangEnum } from "@src/lang/enum";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { ColorEnum } from "@src/assets/enum";
import { handleAddItem } from "../store";
import { ClothingItem } from "../styled";
import LoadingSpinner from "@src/components/loading/LoadingSpinner";
import ClothingFilter from "../components/ClothingFilter";

const ClothingList = () => {
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState<ClothingFilterType>({});
  const { data: clothingList, isLoading } = useClothingList(filter);

  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    const category = searchParams.get("category");
    const color = searchParams.getAll("color");
    const style = searchParams.getAll("style");
    const labeltheme = searchParams.get("labeltheme");

    setFilter((prevFilter) => ({
      ...prevFilter,
      category: category as ClothingCategory,
      color: color as ColorEnum[],
      style: style as ClothingStyle[],
      labeltheme: labeltheme as ClothingLabelTheme,
    }));
  }, [searchParams]);

  return (
    <Wrapper>
      <div>옷</div>

      <ClothingFilter filter={filter} />

      {isLoading && <LoadingSpinner />}

      {clothingList &&
        clothingList.map((clothing) => {
          return (
            <ClothingItem key={clothing.name}>
              <div onClick={() => navigate(clothing.name)}>
                {t(
                  `${LangEnum.clothing}.${clothing.category}.${clothing.name}`
                )}
              </div>
              <div>
                <button onClick={() => handleAddItem(clothing)}>거래</button>
              </div>
            </ClothingItem>
          );
        })}
    </Wrapper>
  );
};

export default ClothingList;
