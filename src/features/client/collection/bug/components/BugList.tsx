import { useTranslation } from "react-i18next";
import { useBugList } from "../services/query";
import { LangEnum } from "@src/commons/util/lang/enum";
import LoadingSpinner from "@src/commons/components/loading/LoadingSpinner";
import { useIslandInfo } from "@src/features/client/myIsland/store/setting";
import { BugDetailType } from "../types";
import { ItemCard } from "@src/commons/components/itemCard/ItemCard";
import { ItemCardListBox } from "@src/commons/components/itemCard/styled";

const BugList = () => {
  const { data: bug_list, isFetching } = useBugList();
  const { hemisphere } = useIslandInfo();

  const { t } = useTranslation();

  const BugListItem = ({ bug }: { bug: BugDetailType }) => {
    const { name, image_url } = bug;
    return (
      <ItemCard
        key={bug.name}
        ko_name={t(`${LangEnum.bug}.${bug.name}`)}
        item={{
          name,
          image_url,
          type: LangEnum.bug,
          amount: 1,
        }}
      />
    );
  };

  if (isFetching) return <LoadingSpinner />;
  if (!bug_list) return <div>no data</div>;
  return (
    <ItemCardListBox>
      {"south" in bug_list && "north" in bug_list
        ? hemisphere === "north"
          ? bug_list.north.map((bug) => {
              return <BugListItem bug={bug} key={bug.name} />;
            })
          : bug_list.south.map((bug) => {
              return <BugListItem bug={bug} key={bug.name} />;
            })
        : bug_list.map((bug) => {
            return <BugListItem bug={bug} key={bug.name} />;
          })}
    </ItemCardListBox>
  );
};

export default BugList;
