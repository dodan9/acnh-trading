import { Wrapper } from "@src/styled";
import { useClothingList } from "../services/query";
import { ChangeEvent, useEffect, useState } from "react";
import { ClothingFilterType } from "../types";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Clothing = () => {
  const [filter, setFilter] = useState<ClothingFilterType>({});
  const { data: clothingList } = useClothingList();

  const { t } = useTranslation();

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const getKo = async () => {
    const response = await axios({
      url: "https://raw.githubusercontent.com/Norviah/animal-crossing/master/json/data/Bags.json",
      method: "GET",
    });

    console.log(
      response.data.map(
        (cloth: { name: string; translations: { kRko: string } }) => {
          return `"${cloth.name}" : "${cloth.translations.kRko}"`;
        }
      )
    );
  };

  useEffect(() => {
    getKo();
  }, []);

  return (
    <Wrapper>
      <div>옷</div>

      <div>
        <select
          value={filter.category ?? ""}
          name="category"
          onChange={handleSelectChange}
        ></select>
      </div>

      {clothingList &&
        clothingList.map((clothing) => {
          return (
            <div key={clothing.name}>
              {t(`clothing.${clothing.category}.${clothing.name}`)}
            </div>
          );
        })}
    </Wrapper>
  );
};

export default Clothing;
