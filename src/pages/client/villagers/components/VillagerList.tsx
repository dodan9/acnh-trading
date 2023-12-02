import { useTranslation } from "react-i18next";
import { VillagerCard, VillagerListBox } from "../styled";
import { useVillagerName } from "../store/keyword";
import { useNavigate } from "react-router";
import { useVillagerFilter } from "../store/filter";
import { useVillagerListQuery } from "../services/query";
import LoadingSpinner from "@src/components/loading/LoadingSpinner";
import { LangEnum } from "@src/lang/enum";

const VillagerList = () => {
  const { t } = useTranslation();
  const name = useVillagerName();
  const navigate = useNavigate();
  const filter = useVillagerFilter();

  const { data: villager_list, isLoading } = useVillagerListQuery(filter);

  return (
    <>
      {isLoading && <LoadingSpinner />}

      <VillagerListBox>
        {villager_list &&
          villager_list
            .filter(
              (villager) =>
                name === "" ||
                t(`${LangEnum.villager}.${villager.name}`).includes(name)
            )
            .map((villager, index) => {
              return (
                <VillagerCard
                  backgroudColor={villager.title_color}
                  textColor={villager.text_color}
                  key={villager.name + index}
                >
                  <div onClick={() => navigate(villager.name)}>
                    {villager.nh_details && (
                      <img src={villager.nh_details.icon_url} />
                    )}
                  </div>
                  <h3>{t(`villager.${villager.name}`)}</h3>
                </VillagerCard>
              );
            })}
      </VillagerListBox>
    </>
  );
};

export default VillagerList;
