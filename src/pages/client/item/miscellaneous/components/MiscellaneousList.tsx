import { useTranslation } from "react-i18next";
import { useMiscellaneousList } from "../services/query";
import { LangEnum } from "@src/lang/enum";
import LoadingSpinner from "@src/components/loading/LoadingSpinner";
import { ItemCard } from "@src/components/card/ItemCard";
import { ItemListBox } from "@src/components/card/styled";
import { useMiscellaneousKeyword } from "../store/miscellaneousFilter";

const MiscellaneousList = () => {
  const keyword = useMiscellaneousKeyword();
  const { data: miscellaneous_list, isLoading } = useMiscellaneousList();
  const { t } = useTranslation();

  if (isLoading) return <LoadingSpinner />;
  if (!miscellaneous_list) return <div>no data</div>;
  return (
    <ItemListBox>
      {miscellaneous_list
        .filter(
          (miscellaneous) =>
            keyword === "" ||
            t(`${LangEnum.miscellaneous}.${miscellaneous.name}`).includes(
              keyword
            )
        )
        .map((item) => {
          return (
            <ItemCard
              key={item.name}
              ko_name={t(
                `${item.is_fence ? LangEnum.fence : LangEnum.others}.${
                  item.name
                }`
              )}
              item={{
                name: item.name,
                type: `${item.is_fence ? LangEnum.fence : LangEnum.others}`,
                image_url: item.image_url,
                amount: 1,
              }}
            />
          );
        })}
    </ItemListBox>
  );
};

export default MiscellaneousList;
