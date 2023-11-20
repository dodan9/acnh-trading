import styled from "@emotion/styled";
import { VillagerFilter, useVillagerListQuery } from "../services/query";
import { ChangeEvent, useState } from "react";
import { VillagerDebut, VillagerPersonality, VillagerSpecies } from "../types";
import { useNavigate } from "react-router";
import LoadingSpinner from "@src/components/LoadingSpinner";

const Villagers = () => {
  const defaultFilter: VillagerFilter = {
    game: VillagerDebut.NewHorizons,
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
    <>
      <div>주민들</div>

      <OptionBox>
        <div>
          종족:
          <select
            name="species"
            value={filter.species ?? ""}
            onChange={handleSelectChange}
          >
            <option value="" label="선택" />
            {Object.entries(VillagerSpecies).map(([key, value]) => {
              return <option key={key} value={value} label={key} />;
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
            <option value="" label="선택" />
            {Object.entries(VillagerPersonality).map(([key, value]) => {
              return <option key={key} value={value} label={key} />;
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
            <option value="" label="선택" />
            {Object.entries(VillagerDebut).map(([key, value]) => {
              return <option key={key} value={value} label={key} />;
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
                onClick={() => navigate(villager.name)}
              >
                <h3>{villager.name}</h3>
                <div>
                  <img src={villager.image_url} />
                </div>
              </VillagerCard>
            );
          })}
      </VillagerList>
    </>
  );
};

export default Villagers;

const OptionBox = styled.div`
  padding: 20px 0;
`;

const VillagerList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 180px);
  gap: 10px;
`;

const VillagerCard = styled.div<{ backgroudColor: string; textColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #${(props) => props.backgroudColor};
  color: #${(props) => props.textColor};
  padding: 20px 30px;
  width: max-content;
  border-radius: 10px;
  gap: 20px;

  & img {
    width: 120px;
  }
  & h3 {
    width: 100%;
    text-align: center;
    padding: 5px 10px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
