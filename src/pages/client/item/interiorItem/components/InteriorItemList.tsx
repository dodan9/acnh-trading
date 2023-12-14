import { useTranslation } from "react-i18next";
import { useInteriorItemList } from "../services/query";
import LoadingSpinner from "@src/components/loading/LoadingSpinner";
import { useInteriorItemKeyword } from "../store/interiorItemFilter";
import { ItemListBox } from "@src/components/card/styled";
import { ItemCard } from "@src/components/card/ItemCard";

const InteriorItemList = () => {
  const { data: interior_item_list, isLoading } = useInteriorItemList();
  const { t } = useTranslation();
  const keyword = useInteriorItemKeyword();

  if (isLoading) return <LoadingSpinner />;
  return (
    <ItemListBox>
      {interior_item_list &&
        interior_item_list
          .filter(
            (item) =>
              keyword === "" ||
              t(`${item.category}.${item.name}`).includes(keyword)
          )
          .map((item) => {
            return (
              <ItemCard
                key={item.name}
                ko_name={t(`${item.category}.${item.name}`)}
                item={{
                  name: item.name,
                  type: `${item.category}.${item.name}`,
                  image_url: item.image_url,
                  amount: 1,
                }}
              />
            );
          })}
    </ItemListBox>
  );
};

export default InteriorItemList;
