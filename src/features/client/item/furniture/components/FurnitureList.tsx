import { useTranslation } from "react-i18next";
import { useFurnitureList } from "../services/query";
import LoadingSpinner from "@src/commons/components/loading/LoadingSpinner";
import { useFurnitureKeyword } from "../store/furnitureFilter";
import { ItemCard } from "@src/commons/components/itemCard/ItemCard";
import { ItemCardListBox } from "@src/commons/components/itemCard/styled";
import VariantsModal from "@src/commons/components/modal/VariantsModal";
import { useState } from "react";
import { FurnitureDetailType } from "../types";

const FurnitureList = () => {
  const { data: furniture_list, isLoading } = useFurnitureList();
  const { t } = useTranslation();
  const keyword = useFurnitureKeyword();

  const [selectedFurniture, setSelectedFurniture] = useState<
    FurnitureDetailType | false
  >(false);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {furniture_list && (
        <ItemCardListBox>
          {furniture_list
            .filter(
              (furniture) =>
                keyword === "" ||
                t(
                  `${furniture.category.toLowerCase()}.${furniture.name}`
                ).includes(keyword)
            )
            .map((furniture) => {
              if (furniture.category)
                return (
                  <ItemCard
                    key={furniture.name}
                    ko_name={t(
                      `${furniture.category.toLowerCase()}.${furniture.name}`
                    )}
                    item={{
                      name: furniture.name,
                      type: furniture.category.toLowerCase(),
                      image_url: furniture.variations[0].image_url,
                      amount: 1,
                    }}
                    onVariantClick={
                      furniture.variations.length > 1
                        ? () => setSelectedFurniture(furniture)
                        : undefined
                    }
                    variantCount={furniture.variation_total}
                  />
                );
            })}
        </ItemCardListBox>
      )}

      {selectedFurniture && (
        <VariantsModal
          onClose={() => setSelectedFurniture(false)}
          name={selectedFurniture.name}
          type={selectedFurniture.category.toLowerCase()}
          variations={selectedFurniture.variations}
        />
      )}
    </>
  );
};

export default FurnitureList;
