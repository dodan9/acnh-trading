import { useTranslation } from "react-i18next";
import { useMiscellaneousList } from "../services/query";
import { LangEnum } from "@src/commons/util/lang/enum";
import LoadingSpinner from "@src/commons/components/loading/LoadingSpinner";
import { ItemCard } from "@src/commons/components/itemCard/ItemCard";
import { useMiscellaneousKeyword } from "../store/miscellaneousFilter";
import { MiscellaneousDetailType } from "../types";
import ItemList from "@src/commons/components/itemCard/ItemList";

const MiscellaneousList = () => {
  const keyword = useMiscellaneousKeyword();
  const { data: miscellaneous_list, isLoading } = useMiscellaneousList();
  const { t } = useTranslation();

  const getItemName = (miscellaneous: MiscellaneousDetailType) => {
    const translationKey = miscellaneous.is_fence
      ? LangEnum.fence
      : LangEnum.others;

    const itemName = t(`${translationKey}.${miscellaneous.name}`, {
      nsSeparator: false, // 네임스페이스 구분자를 사용하지 않음 => ":" 이 들어가는 key 존재
    });

    return itemName;
  };

  if (isLoading) return <LoadingSpinner />;
  if (!miscellaneous_list) return <div>no data</div>;
  return (
    <>
      <ItemList>
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
      </ItemList>
    </>
  );
};

export default MiscellaneousList;
