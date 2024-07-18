import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import i18n from '../translations/i18n'
import {languages} from './useConsts';
import saveItem from './useDeviceStorage';

const useSettings = () => {
    const [unit, setUnit] = useState(0);
    const [maxSpeed, setMaxSpeed] = useState(100);
    const [orientationLock, setOrientationLock] = useState(0);
    const [showGPSAccuracy, setShowGPSAccuracy] = useState(false);
    const [smoothNeedleAnimation, setSmoothNeedleAnimation] = useState(false);
    const [temperatureUnit, setTemperatureUnit] = useState(0);
    const [autoStartTrip, setAutoStartTrip] = useState(false);
    const [appAppearance, setAppAppearance] = useState(0);
    const [speedometerSide, setSpeedometerSide] = useState(0);
    const [language, setLanguage] = useState(0);

    useEffect(() => {
        const loadSettings = async () => {
            const storedUnit = await AsyncStorage.getItem('unit');
            const storedMaxSpeed = await AsyncStorage.getItem('maxSpeed');
            const storedOrientationLock = await AsyncStorage.getItem('orientationLock');
            const storedShowGPSAccuracy = await AsyncStorage.getItem('showGPSAccuracy');
            const storedSmoothNeedleAnimation = await AsyncStorage.getItem('smoothNeedleAnimation');
            const storedTemperatureUnit = await AsyncStorage.getItem('temperatureUnit');
            const storedAutoStartTrip = await AsyncStorage.getItem('autoStartTrip');
            const storedAppAppearance = await AsyncStorage.getItem('appAppearance');
            const storedSpeedometerSide = await AsyncStorage.getItem('speedometerSide');
            const storedLanguage = await AsyncStorage.getItem('language');

            setUnit(Number(storedUnit) || 0);
            setMaxSpeed(Number(storedMaxSpeed) || 100);
            setOrientationLock(Number(storedOrientationLock) || 0);
            setShowGPSAccuracy(storedShowGPSAccuracy === 'true');
            setSmoothNeedleAnimation(storedSmoothNeedleAnimation === 'true');
            setTemperatureUnit(Number(storedTemperatureUnit) || 0);
            setAutoStartTrip(storedAutoStartTrip === 'true');
            setAppAppearance(Number(storedAppAppearance) || 0);
            setSpeedometerSide(Number(storedSpeedometerSide) || 0);
            setLanguage(Number(storedLanguage) || 0);
        };

        loadSettings();
    }, []);

    const updateUnit = async (value) => {
        if (value !== null) {
            setUnit(value);
            await saveItem('unit', value);
        }
    };

    const updateMaxSpeed = async (value) => {
        if (value !== null) {
            setMaxSpeed(value);
            await saveItem('maxSpeed', value);
        }
    };

    const updateOrientationLock = async (value) => {
        if (value !== null) {
            setOrientationLock(value);
            await saveItem('orientationLock', value);
        }
    };

    const updateShowGPSAccuracy = async (value) => {
        if (value !== null) {
            setShowGPSAccuracy(value);
            await saveItem('showGPSAccuracy', value);
        }
    };

    const updateSmoothNeedleAnimation = async (value) => {
        if (value !== null) {
            setSmoothNeedleAnimation(value);
            await saveItem('smoothNeedleAnimation', value);
        }
    };

    const updateTemperatureUnit = async (value) => {
        if (value !== null) {
            setTemperatureUnit(value);
            await saveItem('temperatureUnit', value);
        }
    };

    const updateAutoStartTrip = async (value) => {
        if (value !== null) {
            setAutoStartTrip(value);
            await saveItem('autoStartTrip', value);
        }
    };

    const updateAppAppearance = async (value) => {
        if (value !== null) {
            setAppAppearance(value);
            await saveItem('appAppearance', value);
        }
    };

    const updateSpeedometerSide = async (value) => {
        if (value !== null) {
            setSpeedometerSide(value);
            await saveItem('speedometerSide', value);
        }
    };

    const updateLanguage = async (value) => {
        if (value !== null) {
            setLanguage(value);
            await saveItem('language', value);
            await i18n.changeLanguage(languages[value]);
        }
    };

    return {
        unit,
        updateUnit,
        maxSpeed,
        updateMaxSpeed,
        orientationLock,
        updateOrientationLock,
        showGPSAccuracy,
        updateShowGPSAccuracy,
        smoothNeedleAnimation,
        updateSmoothNeedleAnimation,
        temperatureUnit,
        updateTemperatureUnit,
        autoStartTrip,
        updateAutoStartTrip,
        appAppearance,
        updateAppAppearance,
        speedometerSide,
        updateSpeedometerSide,
        language,
        updateLanguage,
    };
};

export default useSettings;
