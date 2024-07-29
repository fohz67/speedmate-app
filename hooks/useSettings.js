import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import i18n from 'i18next';
import {useEffect, useState} from 'react';
import {INFO} from "../utils/logUtils";

const settingsData = {
    age: {
        default: 0,
        key: 'age',
    },
    arcWidth: {
        default: 5,
        key: 'arcWidth',
    },
    firstName: {
        default: '',
        key: 'firstName',
    },
    language: {
        default: 0,
        key: 'language',
    },
    lastName: {
        default: '',
        key: 'lastName',
    },
    nickname: {
        default: '',
        key: 'nickname',
    },
    profilePicture: {
        default: '',
        key: 'profilePicture',
    },
    speedometerMaxValue: {
        default: 200,
        key: 'speedometerMaxValue',
    },
    statOdometer: {
        default: 0,
        key: 'statOdometer',
    },
    statTime: {
        default: 0,
        key: 'statTime',
    },
    statRideTime: {
        default: 0,
        key: 'statRideTime',
    },
    statStoppedTime: {
        default: 0,
        key: 'statStoppedTime',
    },
    unit: {
        default: 0,
        key: 'unit',
    },
    vehicleBrand: {
        default: '',
        key: 'vehicleBrand',
    },
    vehicleModel: {
        default: '',
        key: 'vehicleModel',
    },
    vehicleType: {
        default: 0,
        key: 'vehicleType',
    },
    accuracyThreshold: {
        default: 50,
        key: 'GPSAccuracyThreshold',
    },
};

const useSettings = () => {
    const languages = ['en', 'fr'];

    const [language, setLanguage] = useState(settingsData.language.default);
    const [speedometerMaxValue, setSpeedometerMaxValue] = useState(settingsData.speedometerMaxValue.default);
    const [arcWidth, setArcWidth] = useState(settingsData.arcWidth.default);
    const [unit, setUnit] = useState(settingsData.unit.default);
    const [accuracyThreshold, setAccuracyThreshold] = useState(settingsData.accuracyThreshold.default);
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
    const [statRideTime, setStatRideTime] = useState(settingsData.statRideTime.default);
    const [statStoppedTime, setStatStoppedTime] = useState(settingsData.statStoppedTime.default);

    useEffect(() => {
        const loadSettings = async () => {
            try {
                const storedLanguage = await AsyncStorage.getItem(settingsData.language.key);
                const storedSpeedometerMaxValue = await AsyncStorage.getItem(settingsData.speedometerMaxValue.key);
                const storedArcWidth = await AsyncStorage.getItem(settingsData.arcWidth.key);
                const storedUnit = await AsyncStorage.getItem(settingsData.unit.key);
                const storedAccuracyThreshold = await AsyncStorage.getItem(settingsData.accuracyThreshold.key);
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
                const storedStatRideTime = await AsyncStorage.getItem(settingsData.statRideTime.key);
                const storedStatStoppedTime = await AsyncStorage.getItem(settingsData.statStoppedTime.key);

                setLanguage(storedLanguage ? parseInt(storedLanguage, 10) : settingsData.language.default);
                setSpeedometerMaxValue(storedSpeedometerMaxValue ? parseInt(storedSpeedometerMaxValue, 10) : settingsData.speedometerMaxValue.default);
                setArcWidth(storedArcWidth ? parseInt(storedArcWidth, 10) : settingsData.arcWidth.default);
                setUnit(storedUnit ? parseInt(storedUnit, 10) : settingsData.unit.default);
                setAccuracyThreshold(storedAccuracyThreshold ? parseInt(storedAccuracyThreshold, 10) : settingsData.accuracyThreshold.default);
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
                setStatRideTime(storedStatRideTime ? parseFloat(storedStatRideTime) : settingsData.statRideTime.default);
                setStatStoppedTime(storedStatStoppedTime ? parseFloat(storedStatStoppedTime) : settingsData.statStoppedTime.default);
                INFO('All settings have been updated.');
            } catch (error) {
                ERROR('Failed to save all settings.');
            }
        };

        loadSettings();
    }, []);

    const updateLanguage = async (newLanguage) => {
        try {
            setLanguage(newLanguage);
            await AsyncStorage.setItem(settingsData.language.key, newLanguage.toString());
            await i18n.changeLanguage(languages[newLanguage]);
            INFO('Language saved.');
        } catch (error) {
            ERROR('Failed to save language.');
        }
    };

    const updateSpeedometerMaxValue = async (newSpeedometerMaxValue) => {
        try {
            setSpeedometerMaxValue(newSpeedometerMaxValue);
            await AsyncStorage.setItem(settingsData.speedometerMaxValue.key, newSpeedometerMaxValue.toString());
            INFO('Speedometer max value saved.');
        } catch (error) {
            ERROR('Failed to save speedometer max value.');
        }
    };

    const updateArcWidth = async (newArcWidth) => {
        try {
            setArcWidth(newArcWidth);
            await AsyncStorage.setItem(settingsData.arcWidth.key, newArcWidth.toString());
            INFO('Arc width saved.');
        } catch (error) {
            ERROR('Failed to save arc width.');
        }
    };

    const updateUnit = async (newUnit) => {
        try {
            setUnit(newUnit);
            await AsyncStorage.setItem(settingsData.unit.key, newUnit.toString());
            INFO('Unit saved.');
        } catch (error) {
            ERROR('Failed to save unit.');
        }
    };

    const updateAccuracyThreshold = async (newAccuracyThreshold) => {
        try {
            setAccuracyThreshold(newAccuracyThreshold);
            await AsyncStorage.setItem(settingsData.accuracyThreshold.key, newAccuracyThreshold.toString());
            INFO('Accuracy threshold saved.');
        } catch (error) {
            ERROR('Failed to save accuracy threshold.');
        }
    };

    const updateProfilePicture = async (newProfilePicture) => {
        try {
            setProfilePicture(newProfilePicture);
            await AsyncStorage.setItem(settingsData.profilePicture.key, newProfilePicture);
            INFO('Profile picture saved.');
        } catch (error) {
            ERROR('Failed to save profile picture.');
        }
    };

    const pickImage = async () => {
        INFO('Requesting library permissions asynchronously...');
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            ERROR('Library permissions not granted.');
            return;
        }

        ERROR('Opening image library...');
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            ERROR('Result and assets are ok to continue.');
            const uri = result.assets[0].uri;

            if (uri) {
                await updateProfilePicture(uri);
            }
        }
    };

    const updateFirstName = async (newFirstName) => {
        try {
            setFirstName(newFirstName);
            await AsyncStorage.setItem(settingsData.firstName.key, newFirstName);
            INFO('First name saved.');
        } catch (error) {
            ERROR('Failed to save first name.');
        }
    };

    const updateLastName = async (newLastName) => {
        try {
            setLastName(newLastName);
            await AsyncStorage.setItem(settingsData.lastName.key, newLastName);
            INFO('Last name saved.');
        } catch (error) {
            ERROR('Failed to save last name.');
        }
    };

    const updateNickname = async (newNickname) => {
        try {
            setNickname(newNickname);
            await AsyncStorage.setItem(settingsData.nickname.key, newNickname);
            INFO('Nickname saved.');
        } catch (error) {
            ERROR('Failed to save nickname.');
        }
    };

    const updateAge = async (newAge) => {
        try {
            setAge(newAge);
            await AsyncStorage.setItem(settingsData.age.key, newAge.toString());
            INFO('Age saved.');
        } catch (error) {
            ERROR('Failed to save age.');
        }
    };

    const updateVehicleType = async (newVehicleType) => {
        try {
            setVehicleType(newVehicleType);
            await AsyncStorage.setItem(settingsData.vehicleType.key, newVehicleType.toString());
            INFO('Vehicle type saved.');
        } catch (error) {
            ERROR('Failed to save vehicle type.');
        }
    };

    const updateVehicleBrand = async (newVehicleBrand) => {
        try {
            setVehicleBrand(newVehicleBrand);
            await AsyncStorage.setItem(settingsData.vehicleBrand.key, newVehicleBrand);
            INFO('Vehicle brand saved.');
        } catch (error) {
            ERROR('Failed to save vehicle brand.');
        }
    };

    const updateVehicleModel = async (newVehicleModel) => {
        try {
            setVehicleModel(newVehicleModel);
            await AsyncStorage.setItem(settingsData.vehicleModel.key, newVehicleModel);
            INFO('Vehicle model saved.');
        } catch (error) {
            ERROR('Failed to save vehicle model.');
        }
    };

    const updateStatOdometer = async (newStatOdometer) => {
        try {
            setStatOdometer(newStatOdometer);
            await AsyncStorage.setItem(settingsData.statOdometer.key, newStatOdometer.toString());
            INFO('Odometer stat saved.');
        } catch (error) {
            ERROR('Failed to save odometer stat.');
        }
    };

    const updateStatTime = async (newStatTime) => {
        try {
            setStatTime(newStatTime);
            await AsyncStorage.setItem(settingsData.statTime.key, newStatTime.toString());
            INFO('Time stat saved.');
        } catch (error) {
            ERROR('Failed to save time stat.');
        }
    };

    const updateStatRideTime = async (newStatRideTime) => {
        try {
            setStatRideTime(newStatRideTime);
            await AsyncStorage.setItem(settingsData.statRideTime.key, newStatRideTime.toString());
            INFO('Ride time stat saved.');
        } catch (error) {
            ERROR('Failed to save ride time stat.');
        }
    };

    const updateStatStoppedTime = async (newStatStoppedTime) => {
        try {
            setStatStoppedTime(newStatStoppedTime);
            await AsyncStorage.setItem(settingsData.statStoppedTime.key, newStatStoppedTime.toString());
            INFO('Stopped time stat saved.');
        } catch (error) {
            ERROR('Failed to save stopped time stat.');
        }
    };

    return {
        language,
        speedometerMaxValue,
        arcWidth,
        unit,
        accuracyThreshold,
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
        statRideTime,
        statStoppedTime,
        updateLanguage,
        updateSpeedometerMaxValue,
        updateArcWidth,
        updateUnit,
        updateAccuracyThreshold,
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
        updateStatRideTime,
        updateStatStoppedTime,
    };
};

export default useSettings;
