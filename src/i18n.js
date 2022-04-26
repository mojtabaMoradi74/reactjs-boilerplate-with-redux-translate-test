import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { appLocales } from 'hook/i18nConfigs/index.js';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // debug: true,
    fallbackLng: 'en',
    // interpolation: {
    //   escapeValue: false, // not needed for react as it escapes by default
    // },
    resources: appLocales
  });

export default i18n;

// import i18next from "i18next";
// import ChainedBackend from "i18next-chained-backend";
// import HttpBackend from "i18next-http-backend";
// import LocalStorageBackend from "i18next-localstorage-backend";

// i18next
//   .use(ChainedBackend)
//   .init({
//     fallbackLng: "en",
//     // ... your i18next config
//     backend: {
//       backends: [
//         LocalStorageBackend,
//         HttpBackend
//       ],
//       backendOptions: [{
//         expirationTime: 7 * 24 * 60 * 60 * 1000 ,// 7 days,
//         loadPath: './locales_cache/{{lng}}/{{ns}}.json',
//         addPath: './locales_cache/{{lng}}/{{ns}}.json' // make sure the folders "locales_cache/{{lng}}" exists
//       }, {
//         loadPath: '/locales/{{lng}}/{{ns}}.json'
//       }]
//     }
//   });