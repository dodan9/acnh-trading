import { useVillagerListQuery } from "../services/query";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import LoadingSpinner from "@src/components/loading/LoadingSpinner";
import { Wrapper } from "@src/styled";
import { VillagerListBox, VillagerCard } from "../styled";
import VillagerSearch from "../components/VillagerSearch";
import { useVillagerName } from "../store/keyword";
import { useVillagerFilter } from "../store/filter";
import VillagerFilter from "../components/VillagerFilter";

const VillagerList = () => {
  const { t } = useTranslation();
  const name = useVillagerName();
  const filter = useVillagerFilter();

  const navigate = useNavigate();

  const { data: villager_list, isFetching } = useVillagerListQuery(filter);

  return (
    <Wrapper>
      <div>주민 목록</div>

      <VillagerSearch />
      <VillagerFilter />

      {isFetching && <LoadingSpinner />}

      <VillagerListBox>
        {villager_list &&
          villager_list
            .filter(
              (villager) =>
                name === "" || t(`villager.${villager.name}`).includes(name)
            )
            .map((villager) => {
              return (
                <VillagerCard
                  backgroudColor={villager.title_color}
                  textColor={villager.text_color}
                  key={villager.url}
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
    </Wrapper>
  );
};

export default VillagerList;
