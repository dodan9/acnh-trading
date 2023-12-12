import { useTranslation } from "react-i18next";
import { useBugList } from "../services/query";
import { LangEnum } from "@src/lang/enum";
import LoadingSpinner from "@src/components/loading/LoadingSpinner";
import { useIslandInfo } from "@src/pages/client/nav/store/setting";
import { useNavigate } from "react-router";
import { BugDetailType } from "../types";

const BugList = () => {
  const { data: bug_list, isFetching } = useBugList();
  const { hemisphere } = useIslandInfo();

  const { t } = useTranslation();
  const navigate = useNavigate();

  const BugListItem = ({ bug }: { bug: BugDetailType }) => {
    return (
      <div onClick={() => navigate(bug.name)}>
        {t(`${LangEnum.bug}.${bug.name}`)}
      </div>
    );
  };

  if (isFetching) return <LoadingSpinner />;
  else if (!bug_list) return <div>no data</div>;
  else if ("south" in bug_list && "north" in bug_list) {
    return hemisphere === "north"
      ? bug_list.north.map((bug) => {
          return <BugListItem bug={bug} key={bug.name} />;
        })
      : bug_list.south.map((bug) => {
          return <BugListItem bug={bug} key={bug.name} />;
        });
  } else {
    return bug_list.map((bug) => {
      return <BugListItem bug={bug} key={bug.name} />;
    });
  }
};

export default BugList;
