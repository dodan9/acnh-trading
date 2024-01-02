import { LangEnum } from "@src/commons/util/lang/enum";
import LoadingSpinner from "@src/commons/components/loading/LoadingSpinner";
import { useClothingList } from "../services/query";
import { useTranslation } from "react-i18next";
import { useClothingKeyword } from "../store/clothingFilter";
import { ItemCardListBox } from "@src/commons/components/itemCard/styled";
import { ItemCard } from "@src/commons/components/itemCard/ItemCard";
import { useState } from "react";
import { ClothingDetailType } from "../types";
import VariantsModal from "@src/commons/components/modal/VariantsModal";

const ClothingList = () => {
  const { data: clothingList, isLoading } = useClothingList();
  const keyword = useClothingKeyword();
  const { t } = useTranslation();

  const [selectedClothing, setSelectedClothing] = useState<
    ClothingDetailType | false
  >(false);

  if (isLoading) return <LoadingSpinner />;
  if (!clothingList) return <div>no data</div>;
  return (
    <>
      <ItemCardListBox>
        {clothingList
          .filter(
            (clothing) =>
              keyword === "" ||
              t(`${clothing.category}.${clothing.name}`).includes(keyword)
          )
          .map((clothing) => {
            return (
              <ItemCard
                onVariantClick={
                  clothing.variations.length > 1
                    ? () => setSelectedClothing(clothing)
                    : undefined
                }
                key={clothing.name}
                ko_name={t(
                  `${LangEnum.clothing}.${clothing.category}.${clothing.name}`
                )}
                item={{
                  name: clothing.name,
                  type: `${LangEnum.clothing}.${clothing.category}`,
                  image_url: clothing.variations[0].image_url,
                  amount: 1,
                }}
                variantCount={clothing.variation_total}
              />
            );
          })}
      </ItemCardListBox>
      {selectedClothing && (
        <VariantsModal
          onClose={() => setSelectedClothing(false)}
          name={selectedClothing.name}
          type={`${LangEnum.clothing}.${selectedClothing.category}`}
          variations={selectedClothing.variations}
        />
      )}
    </>
  );
};

export default ClothingList;
