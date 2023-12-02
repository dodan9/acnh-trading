import { ChangeEvent } from "react";
import { OptionBox } from "../styled";
import { useVillagerFilter, useVillagerFilterAction } from "../store/filter";
import { VillagerGame, VillagerPersonality, VillagerSpecies } from "../types";
import { useTranslation } from "react-i18next";
import { LangEnum } from "@src/lang/enum";

const VillagerFilter = () => {
  const { t } = useTranslation();
  const filter = useVillagerFilter();
  const { setFilter } = useVillagerFilterAction();

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <OptionBox>
      <div>
        종족:
        <select
          name="species"
          value={filter.species ?? ""}
          onChange={handleSelectChange}
        >
          <option value="" label="-" />
          {Object.entries(VillagerSpecies).map(([key, value]) => {
            return (
              <option
                key={key}
                value={value}
                label={t(`${LangEnum.species}.${value}`)}
              />
            );
          })}
        </select>
      </div>

      <div>
        성격:
        <select
          name="personality"
          value={filter.personality ?? ""}
          onChange={handleSelectChange}
        >
          <option value="" label="-" />
          {Object.entries(VillagerPersonality).map(([key, value]) => {
            return (
              <option
                key={key}
                value={value}
                label={t(`${LangEnum.personality}.${value}`)}
              />
            );
          })}
        </select>
      </div>

      <div>
        시리즈:
        <select
          name="game"
          value={filter.game ?? ""}
          onChange={handleSelectChange}
        >
          <option value="" label="-" />
          {Object.entries(VillagerGame).map(([key, value]) => {
            return (
              <option
                key={key}
                value={value}
                label={t(`${LangEnum.game}.${key}`)}
              />
            );
          })}
        </select>
      </div>
    </OptionBox>
  );
};

export default VillagerFilter;