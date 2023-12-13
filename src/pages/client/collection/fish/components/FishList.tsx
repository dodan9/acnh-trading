import { useTranslation } from "react-i18next";
import { useFishList } from "../services/query";
import { LangEnum } from "@src/lang/enum";
import { useNavigate } from "react-router";

const FishList = () => {
  const { data: fish_list } = useFishList();

  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      {fish_list &&
        fish_list.map((fish) => {
          return (
            <div key={fish.name} onClick={() => navigate(fish.name)}>
              {t(`${LangEnum.fish}.${fish.name}`)}
            </div>
          );
        })}
    </>
  );
};

export default FishList;
