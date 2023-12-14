import { LangEnum } from "@src/lang/enum";
import LoadingSpinner from "@src/components/loading/LoadingSpinner";
import { useClothingList } from "../services/query";
import { useTranslation } from "react-i18next";
import { useClothingKeyword } from "../store/clothingFilter";
import { ItemListBox } from "@src/components/card/styled";
import { ItemCard } from "@src/components/card/ItemCard";

const ClothingList = () => {
  const { data: clothingList, isLoading } = useClothingList();
  const keyword = useClothingKeyword();

  const { t } = useTranslation();

  if (isLoading) return <LoadingSpinner />;
  if (!clothingList) return <div>no data</div>;
  return (
    <ItemListBox>
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
    </ItemListBox>
  );
};

export default ClothingList;
