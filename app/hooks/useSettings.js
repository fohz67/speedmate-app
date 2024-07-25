import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {languages} from '../constants';
import i18n from '../i18n'
import deviceSave from '../storage';

const useSettings = () => {
    const [unit, setUnit] = useState(0);
    const [speedometerMaxValue, setSpeedometerMaxValue] = useState(100);
    const [language, setLanguage] = useState(0);

    useEffect(() => {
        loadSettings();
    }, []);

    const loadSettings = async () => {
        const storedUnit = await AsyncStorage.getItem('unit');
        const storedSpeedometerMaxValue = await AsyncStorage.getItem('speedometerMaxValue');
        const storedLanguage = await AsyncStorage.getItem('language');

        setUnit(Number(storedUnit) || 0);
        setSpeedometerMaxValue(Number(storedSpeedometerMaxValue) || 100);
        setLanguage(Number(storedLanguage) || 0);
    }

    const updateUnit = async (value) => {
        if (value !== null) {
            setUnit(value);
            await deviceSave('unit', value);
        }
    };

    const updateSpeedometerMaxValue = async (value) => {
        if (value !== null) {
            setSpeedometerMaxValue(value);
            await deviceSave('speedometerMaxValue', value);
        }
    };

    const updateLanguage = async (value) => {
        if (value !== null) {
            setLanguage(value);
            await deviceSave('language', value);
            await i18n.changeLanguage(languages[value]);
        }
    };

    return {
        unit,
        updateUnit,
        speedometerMaxValue,
        updateSpeedometerMaxValue,
        language,
        updateLanguage
    };
};

export default useSettings;
