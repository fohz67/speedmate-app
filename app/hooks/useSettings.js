import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import i18n from '../i18n'
import deviceSave from '../storage';
import {languages} from './useOptions';

const useSettings = () => {
    const [unit, setUnit] = useState(0);
    const [maxSpeedometerValue, setMaxSpeedometerValue] = useState(100);
    const [appAppearance, setAppAppearance] = useState(0);
    const [language, setLanguage] = useState(0);
    const [speedometerLineCap, setSpeedometerLineCap] = useState(0);
    const [speedometerWidth, setSpeedometerWidth] = useState(30);

    useEffect(() => {
        loadSettings();
    }, []);

    const loadSettings = async () => {
        const storedUnit = await AsyncStorage.getItem('unit');
        const storedMaxSpeedometerValue = await AsyncStorage.getItem('maxSpeedometerValue');
        const storedAppAppearance = await AsyncStorage.getItem('appAppearance');
        const storedLanguage = await AsyncStorage.getItem('language');
        const storedSpeedometerLineCap = await AsyncStorage.getItem('speedometerLineCap');
        const storedSpeedometerWidth = await AsyncStorage.getItem('speedometerWidth');

        setUnit(Number(storedUnit) || 0);
        setMaxSpeedometerValue(Number(storedMaxSpeedometerValue) || 100);
        setAppAppearance(Number(storedAppAppearance) || 0);
        setLanguage(Number(storedLanguage) || 0);
        setSpeedometerLineCap(Number(storedSpeedometerLineCap) || 0);
        setSpeedometerWidth(Number(storedSpeedometerWidth) || 30);
    }

    const updateUnit = async (value) => {
        if (value !== null) {
            setUnit(value);
            await deviceSave('unit', value);
        }
    };

    const updateMaxSpeedometerValue = async (value) => {
        if (value !== null) {
            setMaxSpeedometerValue(value);
            await deviceSave('maxSpeedometerValue', value);
        }
    };

    const updateAppAppearance = async (value) => {
        if (value !== null) {
            setAppAppearance(value);
            await deviceSave('appAppearance', value);
        }
    };

    const updateLanguage = async (value) => {
        if (value !== null) {
            setLanguage(value);
            await deviceSave('language', value);
            await i18n.changeLanguage(languages[value]);
        }
    };

    const updateSpeedometerLineCap = async (value) => {
        if (value !== null) {
            setSpeedometerLineCap(value);
            await deviceSave('speedometerLineCap', value);
            await i18n.changeLanguage(languages[value]);
        }
    };

    const updateSpeedometerWidth = async (value) => {
        if (value !== null) {
            setSpeedometerWidth(value);
            await deviceSave('speedometerWidth', value);
        }
    };

    return {
        unit,
        updateUnit,
        maxSpeedometerValue,
        updateMaxSpeedometerValue,
        appAppearance,
        updateAppAppearance,
        language,
        updateLanguage,
        speedometerLineCap,
        updateSpeedometerLineCap,
        speedometerWidth,
        updateSpeedometerWidth,
    };
};

export default useSettings;
