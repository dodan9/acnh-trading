import { Wrapper } from "@src/styled";
import { useClothingList } from "../services/query";
import { ChangeEvent, useEffect, useState } from "react";
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

const ClothingList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<ClothingFilterType>({});
  const { data: clothingList, isLoading } = useClothingList(filter);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const addSearchParam = ({
    key,
    value,
  }: {
    key: "color" | "style";
    value: ColorEnum | ClothingStyle;
  }) => {
    searchParams.append(key, value);
    setSearchParams(searchParams);
  };

  const removeSearchParam = ({
    key,
    value,
  }: {
    key: "color" | "style";
    value: ColorEnum | ClothingStyle;
  }) => {
    const newValues = searchParams.getAll(key).filter((item) => item !== value);
    newValues.map((newValue) => searchParams.set(key, newValue));
    setSearchParams(searchParams);
  };

  const setSearchParamValue = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    if (value === "") searchParams.delete(name);
    else searchParams.set(name, value);
    setSearchParams(searchParams);
  };

  const clearValue = () => {
    setSearchParams("");
  };

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

      <div>
        <button onClick={() => clearValue()}>필터 초기화</button>
      </div>

      <div>
        <div>카테고리</div>
        <select
          value={filter.category ?? ""}
          name="category"
          onChange={setSearchParamValue}
        >
          <option value="" label="-" />
          {Object.values(ClothingCategory).map((category) => {
            return (
              <option key={category} value={category}>
                {t(`${LangEnum.clothing}.category.${category}`)}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <div>테마</div>
        <select
          value={filter.labeltheme ?? ""}
          name="labeltheme"
          onChange={setSearchParamValue}
        >
          <option value="" label="-" />
          {Object.values(ClothingLabelTheme).map((labeltheme) => {
            return (
              <option key={labeltheme} value={labeltheme}>
                {t(`${LangEnum.clothing}.label_theme.${labeltheme}`)}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <div>스타일</div>
        {Object.values(ClothingStyle).map((style) => {
          const isSelected = searchParams.getAll("style").includes(style);
          return (
            <div key={style}>
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() =>
                  isSelected
                    ? removeSearchParam({ key: "style", value: style })
                    : addSearchParam({ key: "style", value: style })
                }
              />
              {t(`${LangEnum.clothing}.style.${style}`)}
            </div>
          );
        })}
      </div>

      <div>
        <div>색상</div>
        {Object.values(ColorEnum).map((color) => {
          const isSelected = searchParams.getAll("color").includes(color);
          return (
            <div key={color}>
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() =>
                  isSelected
                    ? removeSearchParam({ key: "color", value: color })
                    : addSearchParam({ key: "color", value: color })
                }
              />
              {t(`${LangEnum.color}.${color}`)}
            </div>
          );
        })}
      </div>

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
