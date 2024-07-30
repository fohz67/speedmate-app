import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {ImagePickerResponse, launchImageLibrary} from 'react-native-image-picker';

interface SettingsData {
    language: { default: number, key: string };
    speedometerMaxValue: { default: number, key: string };
    arcWidth: { default: number, key: string };
    unit: { default: number, key: string };
    accuracyThreshold: { default: number, key: string };
    profilePicture: { default: string, key: string };
    firstName: { default: string, key: string };
    lastName: { default: string, key: string };
    nickname: { default: string, key: string };
    age: { default: number, key: string };
    vehicleType: { default: number, key: string };
    vehicleBrand: { default: string, key: string };
    vehicleModel: { default: string, key: string };
    statOdometer: { default: number, key: string };
    statTime: { default: number, key: string };
    statRideTime: { default: number, key: string };
    statStoppedTime: { default: number, key: string };
}

const settingsData: SettingsData = {
    language: {default: 0, key: 'language'},
    speedometerMaxValue: {default: 120, key: 'speedometerMaxValue'},
    arcWidth: {default: 2, key: 'arcWidth'},
    unit: {default: 0, key: 'unit'},
    accuracyThreshold: {default: 5, key: 'accuracyThreshold'},
    profilePicture: {default: '', key: 'profilePicture'},
    firstName: {default: 'John', key: 'firstName'},
    lastName: {default: 'Doe', key: 'lastName'},
    nickname: {default: 'johndoe', key: 'nickname'},
    age: {default: 30, key: 'age'},
    vehicleType: {default: 0, key: 'vehicleType'},
    vehicleBrand: {default: 'Toyota', key: 'vehicleBrand'},
    vehicleModel: {default: 'Corolla', key: 'vehicleModel'},
    statOdometer: {default: 10000, key: 'statOdometer'},
    statTime: {default: 200, key: 'statTime'},
    statRideTime: {default: 150, key: 'statRideTime'},
    statStoppedTime: {default: 50, key: 'statStoppedTime'},
};

export interface SettingsState {
    language: number;
    speedometerMaxValue: number;
    arcWidth: number;
    unit: number;
    accuracyThreshold: number;
    profilePicture: string;
    firstName: string;
    lastName: string;
    nickname: string;
    age: number;
    vehicleType: number;
    vehicleBrand: string;
    vehicleModel: string;
    statOdometer: number;
    statTime: number;
    statRideTime: number;
    statStoppedTime: number;
}

const initialState: SettingsState = {
    language: settingsData.language.default,
    speedometerMaxValue: settingsData.speedometerMaxValue.default,
    arcWidth: settingsData.arcWidth.default,
    unit: settingsData.unit.default,
    accuracyThreshold: settingsData.accuracyThreshold.default,
    profilePicture: settingsData.profilePicture.default,
    firstName: settingsData.firstName.default,
    lastName: settingsData.lastName.default,
    nickname: settingsData.nickname.default,
    age: settingsData.age.default,
    vehicleType: settingsData.vehicleType.default,
    vehicleBrand: settingsData.vehicleBrand.default,
    vehicleModel: settingsData.vehicleModel.default,
    statOdometer: settingsData.statOdometer.default,
    statTime: settingsData.statTime.default,
    statRideTime: settingsData.statRideTime.default,
    statStoppedTime: settingsData.statStoppedTime.default,
};

export const useSettings = () => {
    const [loading, setLoading] = useState(true);
    const [settings, setSettings] = useState<SettingsState>(initialState);

    const loadSetting = async <K extends keyof SettingsState>(key: K): Promise<void> => {
        try {
            const value: string | null = await AsyncStorage.getItem(settingsData[key].key);
            setSettings((prevState: SettingsState) => ({
                ...prevState,
                [key]: value !== null ? JSON.parse(value) : initialState[key],
            }));
        } catch (error) {
            console.error(`🔴 [loadSetting] ==> Failed to load ${key}: `, error);
        }
    };

    const loadSettings = async (): Promise<void> => {
        setLoading(true);
        await Promise.all(Object.keys(initialState).map((key: string) => loadSetting(key as keyof SettingsState)));
        setLoading(false);
    };

    const updateSetting = async <K extends keyof SettingsState>(key: K, value: SettingsState[K]): Promise<void> => {
        try {
            setSettings((prevState: SettingsState) => ({
                ...prevState,
                [key]: value,
            }));
            await AsyncStorage.setItem(settingsData[key].key, JSON.stringify(value));
            console.log(`🟢 [updateSettings] ==> ${key} saved ✅.`);
        } catch (error) {
            console.error(`🔴 [updateSettings] ==> Failed to save ${key}.`);
        }
    };

    const pickImage = async (): Promise<void> => {
        const result: ImagePickerResponse = await launchImageLibrary({
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
        });

        if (result.assets && result.assets.length > 0) {
            const uri: string | undefined = result.assets[0].uri;
            if (uri) {
                await updateSetting('profilePicture', uri);
            }
        }
    };

    useEffect((): void => {
        loadSettings();
    }, []);

    return {
        loading,
        settings,
        updateSetting,
        pickImage,
    };
};
