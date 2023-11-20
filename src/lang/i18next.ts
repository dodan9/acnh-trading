import langKo from "./ko_lang.json";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resource = {
  "ko-KR": {
    translation: langKo,
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
