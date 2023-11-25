import { Wrapper } from "@src/styled";
import { useClothingList } from "../services/query";
import { ChangeEvent, useState } from "react";
import { ClothingDetailType, ClothingFilterType } from "../types";
import { useTranslation } from "react-i18next";
import { LangEnum } from "@src/lang/enum";
import { useAddItem, useCartLastIndex } from "@src/pages/generator/store/cart";

const ClothingList = () => {
  const [filter, setFilter] = useState<ClothingFilterType>({});
  const { data: clothingList } = useClothingList();
  const cartCount = useCartLastIndex();
  const addItem = useAddItem();

  const { t } = useTranslation();

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleAddItem = (clothing: ClothingDetailType) => {
    addItem({
      item: {
        name: clothing.name,
        type: `${LangEnum.clothing}.${clothing.category}`,
        image_url: clothing.variations[0].image_url,
        amount: 1,
      },
      index: cartCount + 1,
    });
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
            <div key={clothing.name} onClick={() => handleAddItem(clothing)}>
              {t(`${LangEnum.clothing}.${clothing.category}.${clothing.name}`)}
            </div>
          );
        })}
    </Wrapper>
  );
};

export default ClothingList;
