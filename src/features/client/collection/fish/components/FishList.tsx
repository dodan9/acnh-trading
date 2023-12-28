import { useTranslation } from "react-i18next";
import { useFishList } from "../services/query";
import { LangEnum } from "@src/common/util/lang/enum";
import { ItemCard } from "@src/common/components/itemCard/ItemCard";
import LoadingSpinner from "@src/common/components/loading/LoadingSpinner";
import { useIslandInfo } from "@src/features/client/myIsland/store/setting";
import { FishDetailType } from "../types";
import { ItemCardListBox } from "@src/common/components/itemCard/styled";

const FishList = () => {
  const { data: fish_list, isLoading } = useFishList();

  const { t } = useTranslation();
  const { hemisphere } = useIslandInfo();

  const FishListItem = ({ fish }: { fish: FishDetailType }) => {
    return (
      <ItemCard
        ko_name={t(`${LangEnum.fish}.${fish.name}`)}
        item={{
          name: fish.name,
          image_url: fish.image_url,
          type: LangEnum.fish,
          amount: 1,
        }}
      />
    );
  };

  if (isLoading) return <LoadingSpinner />;
  if (!fish_list) return <div>no data</div>;
  return (
    <ItemCardListBox>
      {"south" in fish_list && "north" in fish_list
        ? hemisphere === "north"
          ? fish_list.north.map((fish) => {
              return <FishListItem key={fish.name} fish={fish} />;
            })
          : fish_list.south.map((fish) => {
              return <FishListItem key={fish.name} fish={fish} />;
            })
        : fish_list.map((fish) => {
            return <FishListItem key={fish.name} fish={fish} />;
          })}
    </ItemCardListBox>
  );
};

export default FishList;
