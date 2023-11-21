import { Wrapper } from "@src/styled";
import axios from "axios";
import { useEffect } from "react";
import { useArtworkList } from "../services/query";
import { useTranslation } from "react-i18next";

const ArtworkList = () => {
  const { data: artwork_list } = useArtworkList();
  const { t } = useTranslation();

  const getKo = async () => {
    const response = await axios({
      url: "https://raw.githubusercontent.com/Norviah/animal-crossing/master/json/data/Artwork.json",
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
      <div>미술품</div>

      {artwork_list &&
        artwork_list.map((artwork) => {
          return <div key={artwork.name}>{t(`artwork.${artwork.name}`)}</div>;
        })}
    </Wrapper>
  );
};

export default ArtworkList;
