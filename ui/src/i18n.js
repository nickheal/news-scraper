import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      averageWordLength: 'Average word length',
      mixed: 'Mixed',
      mostFrequentWords: 'Most frequent words',
      negative: 'Negative',
      neutral: 'Neutral',
      positive: 'Positive',
      reports: 'Reports',
      sentiment: 'Sentiment',

      /** Targets */
      bbc: 'BBC',
      buzzfeed: 'Buzzfeed',
      'daily-mail': 'Daily Mail',
      'daily-echo': 'Daily Echo',
      'financial-times': 'Financial Times',
      guardian: 'The Guardian',
      'hampshire-chronicle': 'Hamps. Chron.',
      'hants-direct': 'Hants Direct',
      heat: 'Heat',
      reddit: 'Reddit'
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
