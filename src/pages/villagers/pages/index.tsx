import { VillagerFilter, useVillagerListQuery } from "../services/query";
import { ChangeEvent, useState } from "react";
import { VillagerGame, VillagerPersonality, VillagerSpecies } from "../types";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import LoadingSpinner from "@src/components/loading/LoadingSpinner";
import { Wrapper } from "@src/styled";
import { OptionBox, VillagerList, VillagerCard } from "../styled";

const Villagers = () => {
  const { t } = useTranslation();

  const defaultFilter: VillagerFilter = {
    game: VillagerGame.NewHorizons,
    nhdetails: true,
  };
  const [filter, setFilter] = useState<VillagerFilter>(defaultFilter);
  const navigate = useNavigate();

  const { data: villager_list, isFetching } = useVillagerListQuery(filter);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <Wrapper>
      <div>주민 목록</div>

      <OptionBox>
        <div>
          종족:
          <select
            name='species'
            value={filter.species ?? ""}
            onChange={handleSelectChange}
          >
            <option value='' label='-' />
            {Object.entries(VillagerSpecies).map(([key, value]) => {
              return (
                <option key={key} value={value} label={t(`species.${value}`)} />
              );
            })}
          </select>
        </div>

        <div>
          성격:
          <select
            name='personality'
            value={filter.personality ?? ""}
            onChange={handleSelectChange}
          >
            <option value='' label='-' />
            {Object.entries(VillagerPersonality).map(([key, value]) => {
              return (
                <option
                  key={key}
                  value={value}
                  label={t(`personality.${value}`)}
                />
              );
            })}
          </select>
        </div>

        <div>
          시리즈:
          <select
            name='game'
            value={filter.game ?? ""}
            onChange={handleSelectChange}
          >
            <option value='' label='-' />
            {Object.entries(VillagerGame).map(([key, value]) => {
              return (
                <option key={key} value={value} label={t(`game.${key}`)} />
              );
            })}
          </select>
        </div>
      </OptionBox>

      {isFetching && <LoadingSpinner />}

      <VillagerList>
        {villager_list &&
          villager_list.map((villager) => {
            return (
              <VillagerCard
                backgroudColor={villager.title_color}
                textColor={villager.text_color}
                key={villager.url}
              >
                <div onClick={() => navigate(villager.name)}>
                  {/* <img src={villager.image_url} /> */}
                  {villager.nh_details && (
                    <img src={villager.nh_details.icon_url} />
                  )}
                </div>
                <h3>{t(`villager.${villager.name}`)}</h3>
              </VillagerCard>
            );
          })}
      </VillagerList>
    </Wrapper>
  );
};

export default Villagers;
