import { ColorType } from "@src/assets/enum";
import { LangEnum } from "@src/commons/util/lang/enum";
import { t } from "i18next";
import { ClothingStyle, ClothingCategory, ClothingLabelTheme } from "../types";
import {
  useClothingFilter,
  useClothingFilterAction,
  useClothingKeyword,
} from "../store/clothingFilter";
import { ChangeEvent } from "react";
import SearchFilter from "@src/commons/components/filter/searchFilter/SearchFilter";
import ColorFilter from "@src/commons/components/filter/colorFilter/ColorFilter";
import SelectFilter from "@src/commons/components/filter/selectFilter/SelectFilter";
import FilterBox from "@src/commons/components/filter/filterBox/FilterBox";

const ClothingFilter = () => {
  const keyword = useClothingKeyword();
  const { category, style, labeltheme, color } = useClothingFilter();
  const {
    setKeyword,
    clearFilter,
    setCategory,
    setColor,
    setStyle,
    setLabelTheme,
  } = useClothingFilterAction();

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };
  const handleChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value as ClothingCategory);
  };

  const handleChangeLabelTheme = (event: ChangeEvent<HTMLSelectElement>) => {
    setLabelTheme(event.target.value as ClothingLabelTheme);
  };

  const handleColorChange = (color: ColorType) => {
    setColor(color);
  };

  const handleStyleChange = (style: string) => {
    setStyle(style as ClothingStyle);
  };

  return (
    <>
      <div>
        <button onClick={() => clearFilter()}>필터 초기화</button>
      </div>

      <div>
        <SearchFilter value={keyword} onChange={handleChangeKeyword} />
      </div>

      <div>
        <div>카테고리</div>
        <select
          value={category ?? ""}
          name="category"
          onChange={handleChangeCategory}
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

      <FilterBox name="테마" direction="column">
        <select
          value={labeltheme ?? ""}
          name="labeltheme"
          onChange={handleChangeLabelTheme}
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
      </FilterBox>

      <FilterBox name="스타일" direction="column">
        <SelectFilter
          options={Object.values(ClothingStyle)}
          selectedOptions={style}
          type={`${LangEnum.clothing}.style`}
          onSelect={handleStyleChange}
        />
      </FilterBox>

      <ColorFilter selectedColor={color} onChange={handleColorChange} />
    </>
  );
};

export default ClothingFilter;
