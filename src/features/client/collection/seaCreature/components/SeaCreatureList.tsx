import { useTranslation } from "react-i18next";
import { LangEnum } from "@src/common/util/lang/enum";
import { ItemCard } from "@src/common/components/itemCard/ItemCard";
import LoadingSpinner from "@src/common/components/loading/LoadingSpinner";
import { useIslandInfo } from "@src/features/client/myIsland/store/setting";
import { ItemCardListBox } from "@src/common/components/itemCard/styled";
import { useSeaCreatureList } from "../services/query";
import { SeaCreatureDetailType } from "../types";

const FishList = () => {
  const { data: sea_creature_list, isLoading } = useSeaCreatureList();

  const { t } = useTranslation();
  const { hemisphere } = useIslandInfo();

  const FishListItem = ({
    sea_creature,
  }: {
    sea_creature: SeaCreatureDetailType;
  }) => {
    return (
      <ItemCard
        key={sea_creature.name}
        ko_name={t(`${LangEnum.sea_creature}.${sea_creature.name}`)}
        item={{
          name: sea_creature.name,
          image_url: sea_creature.image_url,
          type: LangEnum.sea_creature,
          amount: 1,
        }}
      />
    );
  };

  if (isLoading) return <LoadingSpinner />;
  if (!sea_creature_list) return <div>no data</div>;
  return (
    <ItemCardListBox>
      {"south" in sea_creature_list && "north" in sea_creature_list
        ? hemisphere === "north"
          ? sea_creature_list.north.map((sea_creature) => {
              return (
                <FishListItem
                  key={sea_creature.name}
                  sea_creature={sea_creature}
                />
              );
            })
          : sea_creature_list.south.map((sea_creature) => {
              return (
                <FishListItem
                  key={sea_creature.name}
                  sea_creature={sea_creature}
                />
              );
            })
        : sea_creature_list.map((sea_creature) => {
            return (
              <FishListItem
                key={sea_creature.name}
                sea_creature={sea_creature}
              />
            );
          })}
    </ItemCardListBox>
  );
};

export default FishList;
