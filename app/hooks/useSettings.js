import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {languages} from '../constants';
import i18n from '../i18n'
import deviceSave from '../storage';

const useSettings = () => {
    const [unit, setUnit] = useState(0);
    const [maxSpeedometerValue, setMaxSpeedometerValue] = useState(100);
    const [language, setLanguage] = useState(0);

    useEffect(() => {
        loadSettings();
    }, []);

    const loadSettings = async () => {
        const storedUnit = await AsyncStorage.getItem('unit');
        const storedMaxSpeedometerValue = await AsyncStorage.getItem('maxSpeedometerValue');
        const storedLanguage = await AsyncStorage.getItem('language');

        setUnit(Number(storedUnit) || 0);
        setMaxSpeedometerValue(Number(storedMaxSpeedometerValue) || 100);
        setLanguage(Number(storedLanguage) || 0);
    }

    const updateUnit = async (value) => {
        if (value !== null) {
            await deviceSave('unit', value);
            setUnit(value);
        }
    };

    const updateMaxSpeedometerValue = async (value) => {
        if (value !== null) {
            await deviceSave('maxSpeedometerValue', value);
            setMaxSpeedometerValue(value);
        }
    };

    const updateLanguage = async (value) => {
        if (value !== null) {
            await deviceSave('language', value);
            await i18n.changeLanguage(languages[value]);
            setLanguage(value);
        }
    };

    return {
        unit,
        updateUnit,
        maxSpeedometerValue,
        updateMaxSpeedometerValue,
        language,
        updateLanguage
    };
};

export default useSettings;
