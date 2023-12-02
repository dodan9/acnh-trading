import { useTranslation } from "react-i18next";
import { useFossilList } from "../services/query";
import { LangEnum } from "@src/lang/enum";

const FossilMain = () => {
  const { data: fossil_list } = useFossilList();

  const { t } = useTranslation();

  return (
    <>
      <div>화석</div>

      {fossil_list &&
        fossil_list.map((fossil) => {
          return (
            <div key={fossil.name}>
              {t(`${LangEnum.fossil}.${fossil.name}`)}
            </div>
          );
        })}
    </>
  );
};

export default FossilMain;