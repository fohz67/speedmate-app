import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useSettings = () => {
    const [unit, setUnit] = useState('Km/h');
    const [maxSpeed, setMaxSpeed] = useState(100);
    const [orientationLock, setOrientationLock] = useState('Automatic');
    const [showGPSAccuracy, setShowGPSAccuracy] = useState(false);
    const [smoothNeedleAnimation, setSmoothNeedleAnimation] = useState(false);
    const [temperatureUnit, setTemperatureUnit] = useState('C');
    const [autoStartTrip, setAutoStartTrip] = useState(false);
    const [appAppearance, setAppAppearance] = useState('Automatic');
    const [speedometerSide, setSpeedometerSide] = useState('Right');
    const [language, setLanguage] = useState('English');

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

            setUnit(storedUnit || 'Km/h');
            setMaxSpeed(Number(storedMaxSpeed) || 100);
            setOrientationLock(storedOrientationLock || 'Automatic');
            setShowGPSAccuracy(storedShowGPSAccuracy === 'true');
            setSmoothNeedleAnimation(storedSmoothNeedleAnimation === 'true');
            setTemperatureUnit(storedTemperatureUnit || 'C');
            setAutoStartTrip(storedAutoStartTrip === 'true');
            setAppAppearance(storedAppAppearance || 'Automatic');
            setSpeedometerSide(storedSpeedometerSide || 'Right');
            setLanguage(storedLanguage || 'English');
        };

        loadSettings();
    }, []);

    const saveItem = async (key, value) => {
        if (value !== null) {
            await AsyncStorage.setItem(key, value);
        }
    };

    const updateUnit = async (value) => {
        if (value !== null) {
            setUnit(value);
            await saveItem('unit', String(value));
        }
    };

    const updateMaxSpeed = async (value) => {
        if (value !== null) {
            setMaxSpeed(value);
            await saveItem('maxSpeed', String(value));
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
            await saveItem('showGPSAccuracy', String(value));
        }
    };

    const updateSmoothNeedleAnimation = async (value) => {
        if (value !== null) {
            setSmoothNeedleAnimation(value);
            await saveItem('smoothNeedleAnimation', String(value));
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
            await saveItem('autoStartTrip', String(value));
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
        }
    };

    return {
        unit,
        setUnit: updateUnit,
        maxSpeed,
        setMaxSpeed: updateMaxSpeed,
        orientationLock,
        setOrientationLock: updateOrientationLock,
        showGPSAccuracy,
        setShowGPSAccuracy: updateShowGPSAccuracy,
        smoothNeedleAnimation,
        setSmoothNeedleAnimation: updateSmoothNeedleAnimation,
        temperatureUnit,
        setTemperatureUnit: updateTemperatureUnit,
        autoStartTrip,
        setAutoStartTrip: updateAutoStartTrip,
        appAppearance,
        setAppAppearance: updateAppAppearance,
        speedometerSide,
        setSpeedometerSide: updateSpeedometerSide,
        language,
        setLanguage: updateLanguage,
    };
};

export default useSettings;