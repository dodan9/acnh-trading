import { ColorEnum } from "@src/assets/enum";
import { LangEnum } from "@src/lang/enum";
import { t } from "i18next";
import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ClothingStyle,
  ClothingCategory,
  ClothingLabelTheme,
  ClothingFilterType,
} from "../types";

const ClothingFilter = ({ filter }: { filter: ClothingFilterType }) => {
  const [searchParams, setSearchParams] = useSearchParams();

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

  return (
    <>
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
    </>
  );
};

export default ClothingFilter;
