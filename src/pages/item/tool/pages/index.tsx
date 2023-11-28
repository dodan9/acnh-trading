import { Wrapper } from "@src/styled";
import axios from "axios";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useToolListQuery } from "../services/query";
import { LangEnum } from "@src/lang/enum";

const ToolsMain = () => {
  const { data: tool_list } = useToolListQuery();
  const { t } = useTranslation();
  const getKo = async () => {
    const response = await axios({
      url: "https://raw.githubusercontent.com/Norviah/animal-crossing/master/json/data/Tools-Goods.json",
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
      <div>도구</div>

      {tool_list &&
        tool_list.map((tool) => {
          return (
            <div key={tool.name}>{t(`${LangEnum.tools}.${tool.name}`)}</div>
          );
        })}
    </Wrapper>
  );
};

export default ToolsMain;
