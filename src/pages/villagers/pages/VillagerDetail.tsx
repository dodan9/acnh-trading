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
import LoadingSpinner from "@src/components/loading/LoadingSpinner";
import { usePhotoDetail } from "@src/pages/item/photo/services/query";
// import { useState } from "react";
// import Tab from "@mui/material/Tab";
// import Tabs from "@mui/material/Tabs";

const VillagerDetail = () => {
  const { name } = useParams();
  const { t } = useTranslation();

  const { data: villager, isFetching } = useVillagerListQuery({
    name,
    nhdetails: true,
  });

  // const { data: photo } = usePhotoDetail({ name: `${name}'s Photo` });

  // type TabsType = "인테리어" | "외관";
  // const [tabs, setTabs] = useState<TabsType>("외관");

  // const handleChangeTabs = (
  //   _event: React.SyntheticEvent,
  //   newValue: TabsType
  // ) => {
  //   setTabs(newValue);
  // };

  return (
    <PassportBack>
      <Passport>
        <PassportTop>-- PASSPORT --</PassportTop>
        {isFetching && <LoadingSpinner />}

        {villager && (
          <>
            <PassportContent>
              <PassportImageBox themeColor={villager[0].title_color}>
                <img
                  src={
                    // photo
                    // ? photo.variations[0].image_url
                    villager[0].image_url
                  }
                />
              </PassportImageBox>

              <PassportInfoBox>
                <PassportQuote>{villager[0].quote}</PassportQuote>

                <div>
                  <h3>{t(`villager.${villager[0].name}`)}</h3>
                </div>
                {/* <div>{t(`species.${villager[0].species}`)}</div> */}
                <div>{t(`personality.${villager[0].personality}`)}</div>
                {/* <div>{t(`hobby.${villager[0].nh_details?.hobby}`)}</div> */}

                <div>
                  (별자리아이콘){t(`month.${villager[0].birthday_month}`)}{" "}
                  {villager[0].birthday_day}일생
                </div>
              </PassportInfoBox>
            </PassportContent>

            <PassportBotom>
              <div>
                성격: {t(`personality.${villager[0].personality}`)}{" "}
                {villager[0].nh_details?.["sub-personality"]}
              </div>

              <div>
                좋아하는 스타일:{" "}
                {villager[0].nh_details?.fav_styles
                  .map((style) => t(`style.${style}`))
                  .join(", ")}
              </div>

              <div>
                좋아하는 색:{" "}
                {villager[0].nh_details?.fav_colors
                  .map((color) => t(`color.${color}`))
                  .join(", ")}
              </div>

              <div>취미: {t(`hobby.${villager[0].nh_details?.hobby}`)}</div>
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
