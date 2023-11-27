import villagerKo from "./ko/villager_ko.json";
import gameKo from "./ko/game_ko.json";
import speciesKo from "./ko/species_ko.json";
import personalityKo from "./ko/personality_ko.json";
import hobbyKo from "./ko/hobby_ko.json";
import styleKo from "./ko/style_ko.json";
import colorKo from "./ko/color_ko.json";
import tagKo from "./ko/tag_ko.json";
import seriesKo from "./ko/series_ko.json";
import categoryKo from "./ko/category_ko.json";
import monthKo from "./ko/month_ko.json";
import clothingKo from "./ko/clothing_ko.json";
import artworkKo from "./ko/artwork_ko.json";
import bugKo from "./ko/bug_ko.json";
import fishKo from "./ko/fish_ko.json";
import sea_creature_Ko from "./ko/sea-creature_ko.json";
import photo_ko from "./ko/photo_ko.json";
import event_ko from "./ko/event_ko.json";
import houseware_ko from "./ko/houseware_ko.json";
import miscellaneous_ko from "./ko/miscellaneous_ko.json";
import wall_mounted_ko from "./ko/wall-mounted_ko.json";
import interior_item_ko from "./ko/interior-item_ko.json";
import others_ko from "./ko/others_ko.json";
import fence_ko from "./ko/fence_ko.json";
import recipe_ko from "./ko/recipe_ko.json";

import i18next, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

const resource: Resource = {
  "ko-KR": {
    translation: {
      ...villagerKo,
      ...gameKo,
      ...speciesKo,
      ...personalityKo,
      ...hobbyKo,
      ...styleKo,
      ...colorKo,
      ...tagKo,
      ...seriesKo,
      ...categoryKo,
      ...monthKo,
      ...clothingKo,
      ...artworkKo,
      ...bugKo,
      ...fishKo,
      ...sea_creature_Ko,
      ...photo_ko,
      ...event_ko,
      ...houseware_ko,
      ...miscellaneous_ko,
      ...wall_mounted_ko,
      ...interior_item_ko,
      ...others_ko,
      ...fence_ko,
      ...recipe_ko,
    },
  },
  "en-US": {
    translation: {},
  },
};

i18next.use(initReactI18next).init({
  resources: resource,
  lng: "ko-KR",
  fallbackLng: "ko-KR",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
