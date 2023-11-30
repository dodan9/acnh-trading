import { Wrapper } from "@src/styled";
import { useTranslation } from "react-i18next";
import { useMiscellaneousList } from "../services/query";
import { LangEnum } from "@src/lang/enum";

const MiscellaneousMain = () => {
  const { data: miscellaneous_list } = useMiscellaneousList();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div>아이템(비가구)</div>

      {miscellaneous_list &&
        miscellaneous_list.map((item) => {
          return (
            <div key={item.name}>
              {t(
                `${item.is_fence ? LangEnum.fence : LangEnum.others}.${
                  item.name
                }`
              )}
            </div>
          );
        })}
    </Wrapper>
  );
};

export default MiscellaneousMain;
