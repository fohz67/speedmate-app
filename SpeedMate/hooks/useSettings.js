import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import {useEffect, useState} from 'react';

const settingsData = {
    arcWidth: {
        default: 5,
        key: 'arcWidth',
    },
    language: {
        default: 0,
        key: 'language',
    },
    speedometerMaxValue: {
        default: 200,
        key: 'speedometerMaxValue',
    },
    unit: {
        default: 0,
        key: 'unit',
    },
};

const useSettings = () => {
    const languages = ["en", "fr"];

    const [language, setLanguage] = useState(settingsData.language.default);
    const [speedometerMaxValue, setSpeedometerMaxValue] = useState(settingsData.speedometerMaxValue.default);
    const [arcWidth, setArcWidth] = useState(settingsData.arcWidth.default);
    const [unit, setUnit] = useState(settingsData.unit.default);

    useEffect(() => {
        const loadSettings = async () => {
            try {
                const storedLanguage = await AsyncStorage.getItem(settingsData.language.key);
                const storedSpeedometerMaxValue = await AsyncStorage.getItem(settingsData.speedometerMaxValue.key);
                const storedArcWidth = await AsyncStorage.getItem(settingsData.arcWidth.key);
                const storedUnit = await AsyncStorage.getItem(settingsData.unit.key);

                setLanguage(storedLanguage ? parseInt(storedLanguage, 10) : settingsData.language.default);
                setSpeedometerMaxValue(storedSpeedometerMaxValue ? parseInt(storedSpeedometerMaxValue, 10) : settingsData.speedometerMaxValue.default);
                setArcWidth(storedArcWidth ? parseInt(storedArcWidth, 10) : settingsData.arcWidth.default);
                setUnit(storedUnit ? parseInt(storedUnit, 10) : settingsData.unit.default);
            } catch (error) {
                console.error('Failed to load settings from AsyncStorage:', error);
            }
        };

        loadSettings();
    }, []);

    const updateLanguage = async (newLanguage) => {
        try {
            setLanguage(newLanguage);
            await AsyncStorage.setItem(settingsData.language.key, newLanguage.toString());
            await i18n.changeLanguage(languages[newLanguage]);
        } catch (error) {
            console.error('Failed to save language setting to AsyncStorage:', error);
        }
    };

    const updateSpeedometerMaxValue = async (newSpeedometerMaxValue) => {
        try {
            setSpeedometerMaxValue(newSpeedometerMaxValue);
            await AsyncStorage.setItem(settingsData.speedometerMaxValue.key, newSpeedometerMaxValue.toString());
        } catch (error) {
            console.error('Failed to save speedometer max speed setting to AsyncStorage:', error);
        }
    };

    const updateArcWidth = async (newArcWidth) => {
        try {
            setArcWidth(newArcWidth);
            await AsyncStorage.setItem(settingsData.arcWidth.key, newArcWidth.toString());
        } catch (error) {
            console.error('Failed to save arc width setting to AsyncStorage:', error);
        }
    };

    const updateUnit = async (newUnit) => {
        try {
            setUnit(newUnit);
            await AsyncStorage.setItem(settingsData.unit.key, newUnit.toString());
        } catch (error) {
            console.error('Failed to save unit setting to AsyncStorage:', error);
        }
    };

    return {
        language,
        speedometerMaxValue,
        arcWidth,
        unit,
        updateLanguage,
        updateSpeedometerMaxValue,
        updateArcWidth,
        updateUnit,
    };
};

export default useSettings;
