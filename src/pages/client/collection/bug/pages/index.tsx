import { useTranslation } from "react-i18next";
import { useBugList } from "../services/query";
import { LangEnum } from "@src/lang/enum";

const BugMain = () => {
  const { data: bug_list } = useBugList();

  const { t } = useTranslation();

  return (
    <>
      <div>곤충</div>

      {bug_list &&
        bug_list.map((bug) => {
          return <div key={bug.name}>{t(`${LangEnum.bug}.${bug.name}`)}</div>;
        })}
    </>
  );
};

export default BugMain;
