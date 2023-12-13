import { useTranslation } from "react-i18next";
import { useBugList } from "../services/query";
import { LangEnum } from "@src/lang/enum";
import LoadingSpinner from "@src/components/loading/LoadingSpinner";
import { useIslandInfo } from "@src/pages/client/nav/store/setting";
import { BugDetailType } from "../types";
import { ItemCard } from "@src/components/card/ItemCard";
import { ItemListBox } from "@src/components/card/styled";

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
    <ItemListBox>
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
    </ItemListBox>
  );
};

export default BugList;
