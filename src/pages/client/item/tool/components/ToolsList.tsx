import { useState } from "react";
import { ToolDetailType } from "../types";
import { useToolListQuery } from "../services/query";
import { useTranslation } from "react-i18next";
import { ItemCard } from "@src/common/components/itemCard/ItemCard";
import { LangEnum } from "@src/common/util/lang/enum";
import VariantsModal from "@src/common/components/modal/VariantsModal";

const ToolsList = () => {
  const { data: tool_list } = useToolListQuery();
  const { t } = useTranslation();

  const [selectedTool, setSelectedTool] = useState<ToolDetailType | false>(
    false
  );

  return (
    <>
      <div>도구</div>

      {tool_list &&
        tool_list.map((tool) => {
          return (
            <ItemCard
              key={tool.name}
              ko_name={t(`${LangEnum.tools}.${tool.name}`)}
              item={{
                name: tool.name,
                type: LangEnum.tools,
                image_url: tool.variations[0].image_url,
                amount: 1,
              }}
            />
          );
        })}

      {selectedTool && (
        <VariantsModal
          onClose={() => setSelectedTool(false)}
          name={selectedTool.name}
          type={LangEnum.tools}
          variations={selectedTool.variations}
        />
      )}
    </>
  );
};

export default ToolsList;
