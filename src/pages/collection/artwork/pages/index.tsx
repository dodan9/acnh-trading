import { Wrapper } from "@src/styled";
import { useArtworkList } from "../services/query";
import { useTranslation } from "react-i18next";
import { LangEnum } from "@src/lang/enum";

const ArtworkList = () => {
  const { data: artwork_list } = useArtworkList();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div>미술품</div>

      {artwork_list &&
        artwork_list.map((artwork) => {
          return (
            <div key={artwork.name}>
              {t(`${LangEnum.artwork}.${artwork.name}`)}
            </div>
          );
        })}
    </Wrapper>
  );
};

export default ArtworkList;