import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import enTranslations from './assets/locales/en/translation.json';
import frTranslations from './assets/locales/fr/translation.json';
import {__Languages} from "./assets/misc/language.tsx";

type Language = (typeof __Languages)[number];

const getStoredLanguage = async (): Promise<Language> => {
    const storedLanguage: string | null = await AsyncStorage.getItem('language');
    return __Languages[parseInt(storedLanguage || '0', 10)];
};

(async () => {
    const language: string = await getStoredLanguage();

    await i18n.use(initReactI18next).init({
        resources: {
            en: {
                translation: enTranslations,
            },
            fr: {
                translation: frTranslations,
            },
        },
        lng: language,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: true,
        },
    });
})();

export default i18n;
