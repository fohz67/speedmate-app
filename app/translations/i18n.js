import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {languages} from '../hooks/useConsts';
import translations from './translations';

const resources = translations;

const getLanguage = async () => {
    const storedLanguage = await AsyncStorage.getItem('language');
    return languages[Number(storedLanguage) || 0];
};

const initializeI18n = async () => {
    const language = await getLanguage();

    i18n.use(initReactI18next).init({
        resources,
        lng: language,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });
};

initializeI18n();

export default i18n;
