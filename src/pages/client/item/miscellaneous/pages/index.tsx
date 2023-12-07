import { useTranslation } from "react-i18next";
import { useMiscellaneousList } from "../services/query";
import { LangEnum } from "@src/lang/enum";
import TradingButton from "@src/components/tradingButton/TradingButton";

const MiscellaneousMain = () => {
  const { data: miscellaneous_list } = useMiscellaneousList();
  const { t } = useTranslation();

  return (
    <>
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
              <TradingButton
                name={item.name}
                type={`${item.is_fence ? LangEnum.fence : LangEnum.others}`}
                image_url={item.image_url}
                amount={1}
              />
            </div>
          );
        })}
    </>
  );
};

export default MiscellaneousMain;
