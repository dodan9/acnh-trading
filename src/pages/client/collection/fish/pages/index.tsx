import { Wrapper } from "@src/styled";
import { useTranslation } from "react-i18next";
import { useFishList } from "../services/query";
import { LangEnum } from "@src/lang/enum";

const FishMain = () => {
  const { data: fish_list } = useFishList();

  const { t } = useTranslation();

  return (
    <Wrapper>
      <div>물고기</div>

      {fish_list &&
        fish_list.map((fish) => {
          return (
            <div key={fish.name}>{t(`${LangEnum.fish}.${fish.name}`)}</div>
          );
        })}
    </Wrapper>
  );
};

export default FishMain;
