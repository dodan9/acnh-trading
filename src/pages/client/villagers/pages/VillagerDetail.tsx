import { useParams } from "react-router";
import { useVillagerListQuery } from "../services/query";
import { useTranslation } from "react-i18next";
import {
  Passport,
  PassportTop,
  PassportBack,
  PassportContent,
  PassportImageBox,
  PassportInfoBox,
  PassportBotom,
  HouseInfo,
  PassportQuote,
} from "../styled/VillagerDetailStyled";
import LoadingSpinner from "@src/common/components/loading/LoadingSpinner";
import { LangEnum } from "@src/assets/lang/enum";

const VillagerDetail = () => {
  const { name } = useParams();
  const { t } = useTranslation();

  const { data: villager, isFetching } = useVillagerListQuery({
    name,
    nhdetails: true,
  });

  return (
    <PassportBack>
      <Passport>
        <PassportTop>-- PASSPORT --</PassportTop>
        {isFetching && <LoadingSpinner />}

        {villager && (
          <>
            <PassportContent>
              <PassportImageBox themeColor={villager[0].title_color}>
                <img src={villager[0].image_url} />
              </PassportImageBox>

              <PassportInfoBox>
                <PassportQuote>
                  {t(`catchphrase.${villager[0].nh_details?.catchphrase}`)}
                </PassportQuote>

                <div>
                  <h3>{t(`${LangEnum.villager}.${villager[0].name}`)}</h3>
                </div>
                <div>
                  {t(`${LangEnum.personality}.${villager[0].personality}`)}
                </div>

                <div>
                  (별자리아이콘)
                  {t(`${LangEnum.month}.${villager[0].birthday_month}`)}{" "}
                  {villager[0].birthday_day}일생
                </div>
              </PassportInfoBox>
            </PassportContent>

            <PassportBotom>
              <div>
                성격: {t(`${LangEnum.personality}.${villager[0].personality}`)}{" "}
                {villager[0].nh_details?.["sub-personality"]}
              </div>

              <div>
                좋아하는 스타일:{" "}
                {villager[0].nh_details?.fav_styles
                  .map((style) => t(`${LangEnum.style}.${style}`))
                  .join(", ")}
              </div>

              <div>
                좋아하는 색:{" "}
                {villager[0].nh_details?.fav_colors
                  .map((color) => t(`${LangEnum.color}.${color}`))
                  .join(", ")}
              </div>

              <div>
                취미: {t(`${LangEnum.hobby}.${villager[0].nh_details?.hobby}`)}
              </div>
              <HouseInfo>
                {/* <img src={villager[0].nh_details?.house_interior_url} />
                <img src={villager[0].nh_details?.house_exterior_url} /> */}
              </HouseInfo>
            </PassportBotom>
          </>
        )}
      </Passport>
    </PassportBack>
  );
};

export default VillagerDetail;
