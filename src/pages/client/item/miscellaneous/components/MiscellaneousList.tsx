import { useTranslation } from "react-i18next";
import { useMiscellaneousList } from "../services/query";
import { LangEnum } from "@src/lang/enum";
import LoadingSpinner from "@src/components/loading/LoadingSpinner";
import { ItemCard } from "@src/components/card/ItemCard";
import { ItemListBox } from "@src/components/card/styled";
import { useMiscellaneousKeyword } from "../store/miscellaneousFilter";
import { MiscellaneousDetailType } from "../types";

const MiscellaneousList = () => {
  const keyword = useMiscellaneousKeyword();
  const { data: miscellaneous_list, isLoading } = useMiscellaneousList();
  const { t } = useTranslation();

  const getItemName = (miscellaneous: MiscellaneousDetailType) => {
    const translationKey = miscellaneous.is_fence
      ? LangEnum.fence
      : LangEnum.others;
    const itemName = t(`${translationKey}.${miscellaneous.name}`, {
      nsSeparator: false,
    });

    return itemName;
  };

  if (isLoading) return <LoadingSpinner />;
  if (!miscellaneous_list) return <div>no data</div>;
  return (
    <ItemListBox>
      {miscellaneous_list
        .filter(
          (miscellaneous) =>
            keyword === "" || getItemName(miscellaneous).includes(keyword)
        )
        .map((miscellaneous) => {
          return (
            <ItemCard
              key={miscellaneous.name}
              ko_name={getItemName(miscellaneous)}
              item={{
                name: miscellaneous.name,
                type: `${
                  miscellaneous.is_fence ? LangEnum.fence : LangEnum.others
                }`,
                image_url: miscellaneous.image_url,
                amount: 1,
              }}
            />
          );
        })}
    </ItemListBox>
  );
};

export default MiscellaneousList;
