import { Wrapper } from "@src/styled";
import { useTranslation } from "react-i18next";
import { useBugList } from "../services/query";

const BugList = () => {
  const { data: bug_list } = useBugList();

  const { t } = useTranslation();

  return (
    <Wrapper>
      <div>곤충</div>

      {bug_list &&
        bug_list.map((bug) => {
          return <div key={bug.name}>{t(`bug.${bug.name}`)}</div>;
        })}
    </Wrapper>
  );
};

export default BugList;
