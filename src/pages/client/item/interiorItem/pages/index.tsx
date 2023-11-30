import { Wrapper } from "@src/styled";
import { useTranslation } from "react-i18next";
import { useInteriorItemList } from "../services/query";

const InteriorItemMain = () => {
  const { data: interior_item_list } = useInteriorItemList();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div>벽지 / 바닥 / 러그</div>

      {interior_item_list &&
        interior_item_list.map((item) => {
          return (
            <div key={item.name}>{t(`${item.category}.${item.name}`)}</div>
          );
        })}
    </Wrapper>
  );
};

export default InteriorItemMain;
