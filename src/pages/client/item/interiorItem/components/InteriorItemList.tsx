import { useTranslation } from "react-i18next";
import { useInteriorItemList } from "../services/query";
import LoadingSpinner from "@src/components/loading/LoadingSpinner";
import { useInteriorItemKeyword } from "../store/interiorItemFilter";

const InteriorItemList = () => {
  const { data: interior_item_list, isLoading } = useInteriorItemList();
  const { t } = useTranslation();
  const keyword = useInteriorItemKeyword();

  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      {interior_item_list &&
        interior_item_list
          .filter(
            (item) =>
              keyword === "" ||
              t(`${item.category}.${item.name}`).includes(keyword)
          )
          .map((item) => {
            return (
              <div key={item.name}>{t(`${item.category}.${item.name}`)}</div>
            );
          })}
    </>
  );
};

export default InteriorItemList;
