import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import frTranslations from './locales/fr/translation.json';

(async () => {
    const languages = ['en', 'fr'];
    const storedLanguage = await AsyncStorage.getItem('language') || 0;
    const language = languages[parseInt(storedLanguage, 10)];

    await i18n.use(initReactI18next).init({
        resources: {
            en: {
                translation: enTranslations
            },
            fr: {
                translation: frTranslations
            },
        },
        lng: language,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        }
    });
})();

export default i18n;
