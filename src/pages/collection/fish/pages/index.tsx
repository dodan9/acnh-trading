import { Wrapper } from "@src/styled";
import axios from "axios";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useFishList } from "../services/query";

const FishList = () => {
  const { data: fish_list } = useFishList();

  const { t } = useTranslation();

  const getKo = async () => {
    const response = await axios({
      url: "https://raw.githubusercontent.com/Norviah/animal-crossing/master/json/data/Fish.json",
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
      <div>물고기</div>

      {fish_list &&
        fish_list.map((fish) => {
          return <div key={fish.name}>{t(`fish.${fish.name}`)}</div>;
        })}
    </Wrapper>
  );
};

export default FishList;
