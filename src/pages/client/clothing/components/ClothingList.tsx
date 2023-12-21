import { LangEnum } from "@src/assets/lang/enum";
import LoadingSpinner from "@src/common/components/loading/LoadingSpinner";
import { useClothingList } from "../services/query";
import { useTranslation } from "react-i18next";
import { useClothingKeyword } from "../store/clothingFilter";
import { ItemCardListBox } from "@src/common/components/itemCard/styled";
import { ItemCard } from "@src/common/components/itemCard/ItemCard";

const ClothingList = () => {
  const { data: clothingList, isLoading } = useClothingList();
  const keyword = useClothingKeyword();

  const { t } = useTranslation();

  if (isLoading) return <LoadingSpinner />;
  if (!clothingList) return <div>no data</div>;
  return (
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
            />
          );
        })}
    </ItemCardListBox>
  );
};

export default ClothingList;
