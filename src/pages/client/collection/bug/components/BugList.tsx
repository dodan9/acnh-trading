import { useTranslation } from "react-i18next";
import { useBugList } from "../services/query";
import { LangEnum } from "@src/lang/enum";
import LoadingSpinner from "@src/components/loading/LoadingSpinner";

const BugList = () => {
  const { data: bug_list, isFetching } = useBugList();

  const { t } = useTranslation();

  if (isFetching) return <LoadingSpinner />;
  if (!bug_list) return;
  if ("south" in bug_list && "north" in bug_list) {
    return bug_list.north.map((bug) => {
      return <div key={bug.name}>{t(`${LangEnum.bug}.${bug.name}`)}</div>;
    });
  } else {
    return bug_list.map((bug) => {
      return <div key={bug.name}>{t(`${LangEnum.bug}.${bug.name}`)}</div>;
    });
  }
};

export default BugList;
