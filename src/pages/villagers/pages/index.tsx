import styled from "@emotion/styled";
import { VillagerFilter, useVillagerListQuery } from "../services/query";
import { ChangeEvent, useState } from "react";
import { VillagerDebut, VillagerPersonality, VillagerSpecies } from "../types";
import { useNavigate } from "react-router";

const Villagers = () => {
  const defaultFilter: VillagerFilter = {
    // game: [VillagerDebut.NewHorizons],
    // nhdetails: false,
    // thumbsize: 50,
  };
  const [filter, setFilter] = useState<VillagerFilter>(defaultFilter);
  const navigate = useNavigate();

  const { data: villager_list } = useVillagerListQuery(filter);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <>
      <div>주민들</div>

      <div>
        종족:
        <select
          name='species'
          value={filter.species ?? ""}
          onChange={handleSelectChange}
        >
          <option value='' label='선택' />
          {Object.entries(VillagerSpecies).map(([key, value]) => {
            return <option key={key} value={value} label={key} />;
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
          <option value='' label='선택' />
          {Object.entries(VillagerPersonality).map(([key, value]) => {
            return <option key={key} value={value} label={key} />;
          })}
        </select>
      </div>

      {villager_list &&
        villager_list.map((villager) => {
          return (
            <div key={villager.url} onClick={() => navigate(villager.name)}>
              <div>{villager.name}</div>
              <ViilagerImage>
                <img src={villager.image_url} />
              </ViilagerImage>
            </div>
          );
        })}
    </>
  );
};

export default Villagers;

const ViilagerImage = styled.div`
  & img {
    width: 100px;
  }
`;
