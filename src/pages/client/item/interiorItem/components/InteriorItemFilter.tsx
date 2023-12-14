import { ColorEnum } from "@src/assets/enum";
import {
  useInteriorItemFilter,
  useInteriorItemFilterAction,
  useInteriorItemKeyword,
} from "../store/interiorItemFilter";
import { LangEnum } from "@src/lang/enum";
import { useTranslation } from "react-i18next";
import { ChangeEvent } from "react";

const InteriorItemFilter = () => {
  const keyword = useInteriorItemKeyword();
  const filter = useInteriorItemFilter();
  const { setKeyword, setColor } = useInteriorItemFilterAction();

  const { t } = useTranslation();

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };
  const handleColorChange = (color: ColorEnum) => {
    setColor(color);
  };

  return (
    <>
      <div>
        검색:
        <input value={keyword} onChange={handleChangeKeyword} />
      </div>

      <div>
        <div>색상</div>
        {Object.values(ColorEnum).map((color) => {
          const isSelected = filter.color?.includes(color);
          return (
            <div key={color}>
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleColorChange(color)}
              />
              {t(`${LangEnum.color}.${color}`)}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default InteriorItemFilter;
