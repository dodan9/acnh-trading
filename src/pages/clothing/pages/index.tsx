import { Wrapper } from "@src/styled";
import { useClothingList } from "../services/query";
import { ChangeEvent, useState } from "react";
import { ClothingFilterType } from "../types";
import { useTranslation } from "react-i18next";

const ClothingList = () => {
  const [filter, setFilter] = useState<ClothingFilterType>({});
  const { data: clothingList } = useClothingList();

  const { t } = useTranslation();

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

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

export default ClothingList;
