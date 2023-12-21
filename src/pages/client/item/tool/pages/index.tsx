import { useTranslation } from "react-i18next";
import { useToolListQuery } from "../services/query";
import { LangEnum } from "@src/common/util/lang/enum";

const ToolsMain = () => {
  const { data: tool_list } = useToolListQuery();
  const { t } = useTranslation();

  return (
    <>
      <div>도구</div>

      {tool_list &&
        tool_list.map((tool) => {
          return (
            <div key={tool.name}>{t(`${LangEnum.tools}.${tool.name}`)}</div>
          );
        })}
    </>
  );
};

export default ToolsMain;
