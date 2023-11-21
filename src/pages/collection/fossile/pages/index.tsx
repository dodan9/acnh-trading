import { Wrapper } from "@src/styled";
import axios from "axios";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useFossilList } from "../services/query";

const FossilList = () => {
  const { data: fossil_list } = useFossilList();

  const { t } = useTranslation();
  const getKo = async () => {
    const response = await axios({
      url: "https://raw.githubusercontent.com/Norviah/animal-crossing/master/json/data/Fossils.json",
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
      <div>화석</div>

      {fossil_list &&
        fossil_list.map((fossil) => {
          return <div key={fossil.name}>{t(`fossil.${fossil.name}`)}</div>;
        })}
    </Wrapper>
  );
};

export default FossilList;
