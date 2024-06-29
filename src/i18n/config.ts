import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../languages/en.json";
import ar from "../languages/ar.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },

  resources: {
    // English
    en: {
      // `translation` is the default namespace.
      // More details about namespaces shortly.
      translation: en,
    },
    // Arabic
    ar: {
      translation: ar,
    },
  },
});

export default i18n;
