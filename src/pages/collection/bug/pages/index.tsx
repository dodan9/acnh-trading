import { Wrapper } from "@src/styled";
import axios from "axios";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useBugList } from "../services/query";

const BugList = () => {
  const { data: bug_list } = useBugList();

  const { t } = useTranslation();

  const getKo = async () => {
    const response = await axios({
      url: "https://raw.githubusercontent.com/Norviah/animal-crossing/master/json/data/Insects.json",
      method: "GET",
    });

    console.log(
      response.data.map(
        (item: { name: string; translations: { kRko: string } }) => {
          return `"${item.name}" : "${item.translations.kRko}"`;
        }
      )
    );
  };

  useEffect(() => {
    getKo();
  }, []);
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
