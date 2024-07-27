import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
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
    profilePicture: {
        default: "",
        key: 'profilePicture',
    },
    firstName: {
        default: "",
        key: 'firstName',
    },
    lastName: {
        default: "",
        key: 'lastName',
    },
    nickname: {
        default: "",
        key: 'nickname',
    },
    age: {
        default: 0,
        key: 'age',
    },
    vehicleType: {
        default: 0,
        key: 'vehicleType',
    },
    vehicleBrand: {
        default: "",
        key: 'vehicleBrand',
    },
    vehicleModel: {
        default: "",
        key: 'vehicleModel',
    },
    statOdometer: {
        default: 0,
        key: 'statOdometer',
    },
    statTime: {
        default: 0,
        key: 'statTime',
    },
};

const useSettings = () => {
    const languages = ["en", "fr"];

    const [language, setLanguage] = useState(settingsData.language.default);
    const [speedometerMaxValue, setSpeedometerMaxValue] = useState(settingsData.speedometerMaxValue.default);
    const [arcWidth, setArcWidth] = useState(settingsData.arcWidth.default);
    const [unit, setUnit] = useState(settingsData.unit.default);
    const [profilePicture, setProfilePicture] = useState(settingsData.profilePicture.default);
    const [firstName, setFirstName] = useState(settingsData.firstName.default);
    const [lastName, setLastName] = useState(settingsData.lastName.default);
    const [nickname, setNickname] = useState(settingsData.nickname.default);
    const [age, setAge] = useState(settingsData.age.default);
    const [vehicleType, setVehicleType] = useState(settingsData.vehicleType.default);
    const [vehicleBrand, setVehicleBrand] = useState(settingsData.vehicleBrand.default);
    const [vehicleModel, setVehicleModel] = useState(settingsData.vehicleModel.default);
    const [statOdometer, setStatOdometer] = useState(settingsData.statOdometer.default);
    const [statTime, setStatTime] = useState(settingsData.statTime.default);

    useEffect(() => {
        const loadSettings = async () => {
            try {
                const storedLanguage = await AsyncStorage.getItem(settingsData.language.key);
                const storedSpeedometerMaxValue = await AsyncStorage.getItem(settingsData.speedometerMaxValue.key);
                const storedArcWidth = await AsyncStorage.getItem(settingsData.arcWidth.key);
                const storedUnit = await AsyncStorage.getItem(settingsData.unit.key);
                const storedProfilePicture = await AsyncStorage.getItem(settingsData.profilePicture.key);
                const storedFirstName = await AsyncStorage.getItem(settingsData.firstName.key);
                const storedLastName = await AsyncStorage.getItem(settingsData.lastName.key);
                const storedNickname = await AsyncStorage.getItem(settingsData.nickname.key);
                const storedAge = await AsyncStorage.getItem(settingsData.age.key);
                const storedVehicleType = await AsyncStorage.getItem(settingsData.vehicleType.key);
                const storedVehicleBrand = await AsyncStorage.getItem(settingsData.vehicleBrand.key);
                const storedVehicleModel = await AsyncStorage.getItem(settingsData.vehicleModel.key);
                const storedStatOdometer = await AsyncStorage.getItem(settingsData.statOdometer.key);
                const storedStatTime = await AsyncStorage.getItem(settingsData.statTime.key);

                setLanguage(storedLanguage ? parseInt(storedLanguage, 10) : settingsData.language.default);
                setSpeedometerMaxValue(storedSpeedometerMaxValue ? parseInt(storedSpeedometerMaxValue, 10) : settingsData.speedometerMaxValue.default);
                setArcWidth(storedArcWidth ? parseInt(storedArcWidth, 10) : settingsData.arcWidth.default);
                setUnit(storedUnit ? parseInt(storedUnit, 10) : settingsData.unit.default);
                setProfilePicture(storedProfilePicture || settingsData.profilePicture.default);
                setFirstName(storedFirstName || settingsData.firstName.default);
                setLastName(storedLastName || settingsData.lastName.default);
                setNickname(storedNickname || settingsData.nickname.default);
                setAge(storedAge ? parseInt(storedAge, 10) : settingsData.age.default);
                setVehicleType(storedVehicleType ? parseInt(storedVehicleType, 10) : settingsData.vehicleType.default);
                setVehicleBrand(storedVehicleBrand || settingsData.vehicleBrand.default);
                setVehicleModel(storedVehicleModel || settingsData.vehicleModel.default);
                setStatOdometer(storedStatOdometer ? parseFloat(storedStatOdometer) : settingsData.statOdometer.default);
                setStatTime(storedStatTime ? parseFloat(storedStatTime) : settingsData.statTime.default);
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

    const updateProfilePicture = async (newProfilePicture) => {
        try {
            setProfilePicture(newProfilePicture);
            await AsyncStorage.setItem(settingsData.profilePicture.key, newProfilePicture);
        } catch (error) {
            console.error('Failed to save profile picture to AsyncStorage:', error);
        }
    };

    const pickImage = async () => {
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work !');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            const uri = result.assets[0].uri;

            if (uri) {
                await updateProfilePicture(uri);
            } else {
                console.error('Image URI is undefined');
            }
        } else if (result.canceled) {
            console.log('User canceled image picker');
        } else {
            console.error('No image assets found in response');
        }
    };

    const updateFirstName = async (newFirstName) => {
        try {
            setFirstName(newFirstName);
            await AsyncStorage.setItem(settingsData.firstName.key, newFirstName);
        } catch (error) {
            console.error('Failed to save first name to AsyncStorage:', error);
        }
    };

    const updateLastName = async (newLastName) => {
        try {
            setLastName(newLastName);
            await AsyncStorage.setItem(settingsData.lastName.key, newLastName);
        } catch (error) {
            console.error('Failed to save last name to AsyncStorage:', error);
        }
    };

    const updateNickname = async (newNickname) => {
        try {
            setNickname(newNickname);
            await AsyncStorage.setItem(settingsData.nickname.key, newNickname);
        } catch (error) {
            console.error('Failed to save nickname to AsyncStorage:', error);
        }
    };

    const updateAge = async (newAge) => {
        try {
            setAge(newAge);
            await AsyncStorage.setItem(settingsData.age.key, newAge.toString());
        } catch (error) {
            console.error('Failed to save age to AsyncStorage:', error);
        }
    };

    const updateVehicleType = async (newVehicleType) => {
        try {
            setVehicleType(newVehicleType);
            await AsyncStorage.setItem(settingsData.vehicleType.key, newVehicleType.toString());
        } catch (error) {
            console.error('Failed to save vehicle type to AsyncStorage:', error);
        }
    };

    const updateVehicleBrand = async (newVehicleBrand) => {
        try {
            setVehicleBrand(newVehicleBrand);
            await AsyncStorage.setItem(settingsData.vehicleBrand.key, newVehicleBrand);
        } catch (error) {
            console.error('Failed to save vehicle brand to AsyncStorage:', error);
        }
    };

    const updateVehicleModel = async (newVehicleModel) => {
        try {
            setVehicleModel(newVehicleModel);
            await AsyncStorage.setItem(settingsData.vehicleModel.key, newVehicleModel);
        } catch (error) {
            console.error('Failed to save vehicle model to AsyncStorage:', error);
        }
    };

    const updateStatOdometer = async (newStatOdometer) => {
        try {
            setStatOdometer(newStatOdometer);
            await AsyncStorage.setItem(settingsData.statOdometer.key, newStatOdometer.toString());
        } catch (error) {
            console.error('Failed to save odometer statistic to AsyncStorage:', error);
        }
    };

    const updateStatTime = async (newStatTime) => {
        try {
            setStatTime(newStatTime);
            await AsyncStorage.setItem(settingsData.statTime.key, newStatTime.toString());
        } catch (error) {
            console.error('Failed to save time statistic to AsyncStorage:', error);
        }
    };

    return {
        language,
        speedometerMaxValue,
        arcWidth,
        unit,
        profilePicture,
        firstName,
        lastName,
        nickname,
        age,
        vehicleType,
        vehicleBrand,
        vehicleModel,
        statOdometer,
        statTime,
        updateLanguage,
        updateSpeedometerMaxValue,
        updateArcWidth,
        updateUnit,
        pickImage,
        updateFirstName,
        updateLastName,
        updateNickname,
        updateAge,
        updateVehicleType,
        updateVehicleBrand,
        updateVehicleModel,
        updateStatOdometer,
        updateStatTime,
    };
};

export default useSettings;
