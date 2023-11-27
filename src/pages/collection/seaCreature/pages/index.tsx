import { Wrapper } from "@src/styled";
import { useTranslation } from "react-i18next";
import { useSeaCreatureList } from "../services/query";
import { LangEnum } from "@src/lang/enum";

const SeaCreatureMain = () => {
  const { data: sea_craeture_list } = useSeaCreatureList();

  const { t } = useTranslation();

  return (
    <Wrapper>
      <div>해산물</div>

      {sea_craeture_list &&
        sea_craeture_list.map((sea_craeture) => {
          return (
            <div key={sea_craeture.name}>
              {t(`${LangEnum.sea_creature}.${sea_craeture.name}`)}
            </div>
          );
        })}
    </Wrapper>
  );
};

export default SeaCreatureMain;
