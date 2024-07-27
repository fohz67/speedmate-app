import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

const SETTINGS_DATA = {
    LANGUAGE: {
        key: 'language',
        default: 0,
    },
    SPEEDOMETER_MAX_SPEED: {
        key: 'speedometerMaxSpeed',
        default: 200,
    },
    ARC_WIDTH: {
        key: 'arcWidth',
        default: 5,
    },
    UNIT: {
        key: 'unit',
        default: 0,
    },
};

const useSettings = () => {
    const [language, setLanguage] = useState(SETTINGS_DATA.LANGUAGE.default);
    const [speedometerMaxSpeed, setSpeedometerMaxSpeed] = useState(SETTINGS_DATA.SPEEDOMETER_MAX_SPEED.default);
    const [arcWidth, setArcWidth] = useState(SETTINGS_DATA.ARC_WIDTH.default);
    const [unit, setUnit] = useState(SETTINGS_DATA.UNIT.default);

    useEffect(() => {
        const loadSettings = async () => {
            try {
                const storedLanguage = await AsyncStorage.getItem(SETTINGS_DATA.LANGUAGE.key);
                const storedSpeedometerMaxSpeed = await AsyncStorage.getItem(SETTINGS_DATA.SPEEDOMETER_MAX_SPEED.key);
                const storedArcWidth = await AsyncStorage.getItem(SETTINGS_DATA.ARC_WIDTH.key);
                const storedUnit = await AsyncStorage.getItem(SETTINGS_DATA.UNIT.key);

                setLanguage(storedLanguage ? parseInt(storedLanguage, 10) : SETTINGS_DATA.LANGUAGE.default);
                setSpeedometerMaxSpeed(storedSpeedometerMaxSpeed ? parseInt(storedSpeedometerMaxSpeed, 10) : SETTINGS_DATA.SPEEDOMETER_MAX_SPEED.default);
                setArcWidth(storedArcWidth ? parseInt(storedArcWidth, 10) : SETTINGS_DATA.ARC_WIDTH.default);
                setUnit(storedUnit ? parseInt(storedUnit, 10) : SETTINGS_DATA.UNIT.default);
            } catch (error) {
                console.error('Failed to load settings from AsyncStorage:', error);
            }
        };

        loadSettings();
    }, []);

    const updateLanguage = async (newLanguage) => {
        try {
            setLanguage(newLanguage);
            await AsyncStorage.setItem(SETTINGS_DATA.LANGUAGE.key, newLanguage.toString());
        } catch (error) {
            console.error('Failed to save language setting to AsyncStorage:', error);
        }
    };

    const updateSpeedometerMaxSpeed = async (newSpeedometerMaxSpeed) => {
        try {
            setSpeedometerMaxSpeed(newSpeedometerMaxSpeed);
            await AsyncStorage.setItem(SETTINGS_DATA.SPEEDOMETER_MAX_SPEED.key, newSpeedometerMaxSpeed.toString());
        } catch (error) {
            console.error('Failed to save speedometer max speed setting to AsyncStorage:', error);
        }
    };

    const updateArcWidth = async (newArcWidth) => {
        try {
            setArcWidth(newArcWidth);
            await AsyncStorage.setItem(SETTINGS_DATA.ARC_WIDTH.key, newArcWidth.toString());
        } catch (error) {
            console.error('Failed to save arc width setting to AsyncStorage:', error);
        }
    };

    const updateUnit = async (newUnit) => {
        try {
            setUnit(newUnit);
            await AsyncStorage.setItem(SETTINGS_DATA.UNIT.key, newUnit.toString());
        } catch (error) {
            console.error('Failed to save unit setting to AsyncStorage:', error);
        }
    };

    return {
        language,
        speedometerMaxSpeed,
        arcWidth,
        unit,
        updateLanguage,
        updateSpeedometerMaxSpeed,
        updateArcWidth,
        updateUnit,
    };
};

export default useSettings;
