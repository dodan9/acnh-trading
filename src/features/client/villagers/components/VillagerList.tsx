import { useTranslation } from "react-i18next";
import { VillagerCard, VillagerListBox } from "../styled";
import { useVillagerKeyword } from "../store/keyword";
import { useNavigate } from "react-router";
import { useVillagerListQuery } from "../services/query";
import LoadingSpinner from "@src/common/components/loading/LoadingSpinner";
import { LangEnum } from "@src/common/util/lang/enum";

const VillagerList = () => {
  const { t } = useTranslation();
  const keyword = useVillagerKeyword();
  const navigate = useNavigate();

  const { data: villager_list, isLoading } = useVillagerListQuery();

  return (
    <>
      {isLoading && <LoadingSpinner />}

      <VillagerListBox>
        {villager_list &&
          villager_list
            .filter(
              (villager) =>
                keyword === "" ||
                t(`${LangEnum.villager}.${villager.name}`).includes(keyword)
            )
            .map((villager, index) => {
              return (
                <VillagerCard
                  backgroudColor={villager.title_color}
                  textColor={villager.text_color}
                  key={villager.name + index}
                >
                  {villager.nh_details && (
                    <img
                      src={villager.nh_details.icon_url}
                      onClick={() => navigate(villager.name)}
                    />
                  )}
                  <h3>{t(`villager.${villager.name}`)}</h3>
                </VillagerCard>
              );
            })}
      </VillagerListBox>
    </>
  );
};

export default VillagerList;
