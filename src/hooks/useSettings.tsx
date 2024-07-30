import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from "i18next";
import {useEffect, useState} from 'react';
import {ImagePickerResponse, launchImageLibrary} from 'react-native-image-picker';
import {__Languages} from "../../assets/misc/language.tsx";

export interface Settings {
    accuracyThreshold: number;
    age: number;
    arcWidth: number;
    firstName: string;
    language: number;
    lastName: string;
    loading: boolean;
    nickname: string;
    profilePicture: string;
    speedometerMaxValue: number;
    statOdometer: number;
    statRideTime: number;
    statStoppedTime: number;
    statTime: number;
    unit: number;
    vehicleBrand: string;
    vehicleModel: string;
    vehicleType: number;
    loadSettings: () => Promise<void>;
    pickImage: () => Promise<void>;
    updateAccuracyThreshold: (value: number) => Promise<void>;
    updateAge: (value: number) => Promise<void>;
    updateArcWidth: (value: number) => Promise<void>;
    updateFirstName: (value: string) => Promise<void>;
    updateLanguage: (value: number) => Promise<void>;
    updateLastName: (value: string) => Promise<void>;
    updateLoading: (value: boolean) => Promise<void>;
    updateNickname: (value: string) => Promise<void>;
    updateProfilePicture: (value: string) => Promise<void>;
    updateSpeedometerMaxValue: (value: number) => Promise<void>;
    updateStatOdometer: (value: number) => Promise<void>;
    updateStatRideTime: (value: number) => Promise<void>;
    updateStatStoppedTime: (value: number) => Promise<void>;
    updateStatTime: (value: number) => Promise<void>;
    updateUnit: (value: number) => Promise<void>;
    updateVehicleBrand: (value: string) => Promise<void>;
    updateVehicleModel: (value: string) => Promise<void>;
    updateVehicleType: (value: number) => Promise<void>;
}

export interface SettingsData {
    accuracyThreshold: { default: number, key: string };
    age: { default: number, key: string };
    arcWidth: { default: number, key: string };
    firstName: { default: string, key: string };
    language: { default: number, key: string };
    lastName: { default: string, key: string };
    nickname: { default: string, key: string };
    profilePicture: { default: string, key: string };
    speedometerMaxValue: { default: number, key: string };
    statOdometer: { default: number, key: string };
    statRideTime: { default: number, key: string };
    statStoppedTime: { default: number, key: string };
    statTime: { default: number, key: string };
    unit: { default: number, key: string };
    vehicleBrand: { default: string, key: string };
    vehicleModel: { default: string, key: string };
    vehicleType: { default: number, key: string };
}

const settingsData: SettingsData = {
    accuracyThreshold: {default: 5, key: 'accuracyThreshold'},
    age: {default: 30, key: 'age'},
    arcWidth: {default: 2, key: 'arcWidth'},
    firstName: {default: 'John', key: 'firstName'},
    language: {default: 0, key: 'language'},
    lastName: {default: 'Doe', key: 'lastName'},
    nickname: {default: 'johndoe', key: 'nickname'},
    profilePicture: {default: '', key: 'profilePicture'},
    speedometerMaxValue: {default: 120, key: 'speedometerMaxValue'},
    statOdometer: {default: 10000, key: 'statOdometer'},
    statRideTime: {default: 150, key: 'statRideTime'},
    statStoppedTime: {default: 50, key: 'statStoppedTime'},
    statTime: {default: 200, key: 'statTime'},
    unit: {default: 0, key: 'unit'},
    vehicleBrand: {default: 'Toyota', key: 'vehicleBrand'},
    vehicleModel: {default: 'Corolla', key: 'vehicleModel'},
    vehicleType: {default: 0, key: 'vehicleType'},
};

export const useSettings = (): Settings => {
    const [loading, setLoading] = useState(true);

    const [accuracyThreshold, setAccuracyThreshold] = useState(settingsData.accuracyThreshold.default);
    const [age, setAge] = useState(settingsData.age.default);
    const [arcWidth, setArcWidth] = useState(settingsData.arcWidth.default);
    const [firstName, setFirstName] = useState(settingsData.firstName.default);
    const [language, setLanguage] = useState(settingsData.language.default);
    const [lastName, setLastName] = useState(settingsData.lastName.default);
    const [nickname, setNickname] = useState(settingsData.nickname.default);
    const [profilePicture, setProfilePicture] = useState(settingsData.profilePicture.default);
    const [speedometerMaxValue, setSpeedometerMaxValue] = useState(settingsData.speedometerMaxValue.default);
    const [statOdometer, setStatOdometer] = useState(settingsData.statOdometer.default);
    const [statRideTime, setStatRideTime] = useState(settingsData.statRideTime.default);
    const [statStoppedTime, setStatStoppedTime] = useState(settingsData.statStoppedTime.default);
    const [statTime, setStatTime] = useState(settingsData.statTime.default);
    const [unit, setUnit] = useState(settingsData.unit.default);
    const [vehicleBrand, setVehicleBrand] = useState(settingsData.vehicleBrand.default);
    const [vehicleModel, setVehicleModel] = useState(settingsData.vehicleModel.default);
    const [vehicleType, setVehicleType] = useState(settingsData.vehicleType.default);

    const loadSettings = async (): Promise<void> => {
        try {
            const storedAccuracyThreshold: string | null = await AsyncStorage.getItem(settingsData.accuracyThreshold.key);
            const storedAge: string | null = await AsyncStorage.getItem(settingsData.age.key);
            const storedArcWidth: string | null = await AsyncStorage.getItem(settingsData.arcWidth.key);
            const storedFirstName: string | null = await AsyncStorage.getItem(settingsData.firstName.key);
            const storedLanguage: string | null = await AsyncStorage.getItem(settingsData.language.key);
            const storedLastName: string | null = await AsyncStorage.getItem(settingsData.lastName.key);
            const storedNickname: string | null = await AsyncStorage.getItem(settingsData.nickname.key);
            const storedProfilePicture: string | null = await AsyncStorage.getItem(settingsData.profilePicture.key);
            const storedSpeedometerMaxValue: string | null = await AsyncStorage.getItem(settingsData.speedometerMaxValue.key);
            const storedStatOdometer: string | null = await AsyncStorage.getItem(settingsData.statOdometer.key);
            const storedStatRideTime: string | null = await AsyncStorage.getItem(settingsData.statRideTime.key);
            const storedStatStoppedTime: string | null = await AsyncStorage.getItem(settingsData.statStoppedTime.key);
            const storedStatTime: string | null = await AsyncStorage.getItem(settingsData.statTime.key);
            const storedUnit: string | null = await AsyncStorage.getItem(settingsData.unit.key);
            const storedVehicleBrand: string | null = await AsyncStorage.getItem(settingsData.vehicleBrand.key);
            const storedVehicleModel: string | null = await AsyncStorage.getItem(settingsData.vehicleModel.key);
            const storedVehicleType: string | null = await AsyncStorage.getItem(settingsData.vehicleType.key);

            setAccuracyThreshold(storedAccuracyThreshold ? parseInt(storedAccuracyThreshold, 10) : settingsData.accuracyThreshold.default);
            setAge(storedAge ? parseInt(storedAge, 10) : settingsData.age.default);
            setArcWidth(storedArcWidth ? parseInt(storedArcWidth, 10) : settingsData.arcWidth.default);
            setFirstName(storedFirstName || settingsData.firstName.default);
            setLanguage(storedLanguage ? parseInt(storedLanguage, 10) : settingsData.language.default);
            setLastName(storedLastName || settingsData.lastName.default);
            setNickname(storedNickname || settingsData.nickname.default);
            setProfilePicture(storedProfilePicture || settingsData.profilePicture.default);
            setSpeedometerMaxValue(storedSpeedometerMaxValue ? parseInt(storedSpeedometerMaxValue, 10) : settingsData.speedometerMaxValue.default);
            setStatOdometer(storedStatOdometer ? parseFloat(storedStatOdometer) : settingsData.statOdometer.default);
            setStatRideTime(storedStatRideTime ? parseFloat(storedStatRideTime) : settingsData.statRideTime.default);
            setStatStoppedTime(storedStatStoppedTime ? parseFloat(storedStatStoppedTime) : settingsData.statStoppedTime.default);
            setStatTime(storedStatTime ? parseFloat(storedStatTime) : settingsData.statTime.default);
            setUnit(storedUnit ? parseInt(storedUnit, 10) : settingsData.unit.default);
            setVehicleBrand(storedVehicleBrand || settingsData.vehicleBrand.default);
            setVehicleModel(storedVehicleModel || settingsData.vehicleModel.default);
            setVehicleType(storedVehicleType ? parseInt(storedVehicleType, 10) : settingsData.vehicleType.default);

            console.log('🟢 [loadSettings] ==> Settings successfully loaded ✅.');
            setLoading(false);
        } catch (error) {
            console.error('🔴 [loadSettings] ==> Failed to load: ', error);

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
                await updateProfilePicture(uri);
            }
        }
    };

    const updateAccuracyThreshold = async (value: number): Promise<void> => {
        try {
            setAccuracyThreshold(value);
            await AsyncStorage.setItem(settingsData.accuracyThreshold.key, value.toString());
        } catch (error) {
            console.error('🔴 [updateAccuracyThreshold] ==> Failed to save: ', error);
        }
    };

    const updateAge = async (value: number): Promise<void> => {
        try {
            setAge(value);
            await AsyncStorage.setItem(settingsData.age.key, value.toString());
        } catch (error) {
            console.error('🔴 [updateAge] ==> Failed to save: ', error);
        }
    };

    const updateArcWidth = async (value: number): Promise<void> => {
        try {
            setArcWidth(value);
            await AsyncStorage.setItem(settingsData.arcWidth.key, value.toString());
        } catch (error) {
            console.error('🔴 [updateArcWidth] ==> Failed to save: ', error);
        }
    };

    const updateFirstName = async (value: string): Promise<void> => {
        try {
            setFirstName(value);
            await AsyncStorage.setItem(settingsData.firstName.key, value);
        } catch (error) {
            console.error('🔴 [updateFirstName] ==> Failed to save: ', error);
        }
    };

    const updateLanguage = async (value: number): Promise<void> => {
        try {
            setLanguage(value);
            await AsyncStorage.setItem(settingsData.language.key, value.toString());
            await i18n.changeLanguage(__Languages[value]);
        } catch (error) {
            console.error('🔴 [updateLanguage] ==> Failed to save: ', error);
        }
    };

    const updateLastName = async (value: string): Promise<void> => {
        try {
            setLastName(value);
            await AsyncStorage.setItem(settingsData.lastName.key, value);
        } catch (error) {
            console.error('🔴 [updateLastName] ==> Failed to save: ', error);
        }
    };

    const updateLoading = async (value: boolean): Promise<void> => {
        try {
            setLoading(value);
        } catch (error) {
            console.error('🔴 [updateLoading] ==> Failed to update loading state: ', error);
        }
    };

    const updateNickname = async (value: string): Promise<void> => {
        try {
            setNickname(value);
            await AsyncStorage.setItem(settingsData.nickname.key, value);
        } catch (error) {
            console.error('🔴 [updateNickname] ==> Failed to save: ', error);
        }
    };

    const updateProfilePicture = async (value: string): Promise<void> => {
        try {
            setProfilePicture(value);
            await AsyncStorage.setItem(settingsData.profilePicture.key, value);
        } catch (error) {
            console.error('🔴 [updateProfilePicture] ==> Failed to save: ', error);
        }
    };

    const updateSpeedometerMaxValue = async (value: number): Promise<void> => {
        try {
            setSpeedometerMaxValue(value);
            await AsyncStorage.setItem(settingsData.speedometerMaxValue.key, value.toString());
        } catch (error) {
            console.error('🔴 [updateSpeedometerMaxValue] ==> Failed to save: ', error);
        }
    };

    const updateStatOdometer = async (value: number): Promise<void> => {
        try {
            setStatOdometer(value);
            await AsyncStorage.setItem(settingsData.statOdometer.key, value.toString());
        } catch (error) {
            console.error('🔴 [updateStatOdometer] ==> Failed to save: ', error);
        }
    };

    const updateStatRideTime = async (value: number): Promise<void> => {
        try {
            setStatRideTime(value);
            await AsyncStorage.setItem(settingsData.statRideTime.key, value.toString());
        } catch (error) {
            console.error('🔴 [updateStatRideTime] ==> Failed to save: ', error);
        }
    };

    const updateStatStoppedTime = async (value: number): Promise<void> => {
        try {
            setStatStoppedTime(value);
            await AsyncStorage.setItem(settingsData.statStoppedTime.key, value.toString());
        } catch (error) {
            console.error('🔴 [updateStatStoppedTime] ==> Failed to save: ', error);
        }
    };

    const updateStatTime = async (value: number): Promise<void> => {
        try {
            setStatTime(value);
            await AsyncStorage.setItem(settingsData.statTime.key, value.toString());
        } catch (error) {
            console.error('🔴 [updateStatTime] ==> Failed to save: ', error);
        }
    };

    const updateUnit = async (value: number): Promise<void> => {
        try {
            setUnit(value);
            await AsyncStorage.setItem(settingsData.unit.key, value.toString());
        } catch (error) {
            console.error('🔴 [updateUnit] ==> Failed to save: ', error);
        }
    };

    const updateVehicleBrand = async (value: string): Promise<void> => {
        try {
            setVehicleBrand(value);
            await AsyncStorage.setItem(settingsData.vehicleBrand.key, value);
        } catch (error) {
            console.error('🔴 [updateVehicleBrand] ==> Failed to save: ', error);
        }
    };

    const updateVehicleModel = async (value: string): Promise<void> => {
        try {
            setVehicleModel(value);
            await AsyncStorage.setItem(settingsData.vehicleModel.key, value);
        } catch (error) {
            console.error('🔴 [updateVehicleModel] ==> Failed to save: ', error);
        }
    };

    const updateVehicleType = async (value: number): Promise<void> => {
        try {
            setVehicleType(value);
            await AsyncStorage.setItem(settingsData.vehicleType.key, value.toString());
        } catch (error) {
            console.error('🔴 [updateVehicleType] ==> Failed to save: ', error);
        }
    };

    useEffect((): void => {
        loadSettings();
    }, []);

    return {
        loadSettings,
        accuracyThreshold, updateAccuracyThreshold,
        age, updateAge,
        arcWidth, updateArcWidth,
        firstName, updateFirstName,
        language, updateLanguage,
        lastName, updateLastName,
        loading, updateLoading,
        nickname, updateNickname,
        profilePicture, updateProfilePicture,
        speedometerMaxValue, updateSpeedometerMaxValue,
        statOdometer, updateStatOdometer,
        statRideTime, updateStatRideTime,
        statStoppedTime, updateStatStoppedTime,
        statTime, updateStatTime,
        unit, updateUnit,
        vehicleBrand, updateVehicleBrand,
        vehicleModel, updateVehicleModel,
        vehicleType, updateVehicleType,
        pickImage,
    };
}
