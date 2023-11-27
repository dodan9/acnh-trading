import { Wrapper } from "@src/styled";
import axios from "axios";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useMiscellaneousList } from "../services/query";
import { LangEnum } from "@src/lang/enum";

const MiscellaneousMain = () => {
  const { data: miscellaneous_list } = useMiscellaneousList();
  const { t } = useTranslation();
  const getKo = async () => {
    const response = await axios({
      url: "https://raw.githubusercontent.com/Norviah/animal-crossing/master/json/data/Interior%20Structures.json",
      method: "GET",
    });

    let text: string = "";
    response.data
      .map(
        (item: {
          name: string;
          //   type: string;
          translations?: { kRko?: string };
          //   kRko?: string;
          //   USen?: string;
        }) => {
          if (item.translations && item.translations.kRko)
            text += `"${item.name}" : "${item.translations.kRko}",`;
        }
      )
      .filter((item: any) => item !== undefined);
    console.log(text);
  };

  useEffect(() => {
    getKo();
  }, []);

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
