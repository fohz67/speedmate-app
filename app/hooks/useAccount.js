import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import {useEffect, useState} from 'react';
import deviceSave from '../storage';

const useAccount = () => {
    const [profileImage, setProfileImage] = useState(require('../../assets/default-picture.png'));
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nickname, setNickname] = useState('');
    const [age, setAge] = useState(0);
    const [vehicleType, setVehicleType] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [model, setModel] = useState('');

    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = async () => {
        const storedProfileImage = await AsyncStorage.getItem('profileImage');
        const storedFirstName = await AsyncStorage.getItem('firstName');
        const storedLastName = await AsyncStorage.getItem('lastName');
        const storedNickname = await AsyncStorage.getItem('nickname');
        const storedAge = await AsyncStorage.getItem('age');
        const storedVehicleType = await AsyncStorage.getItem('vehicleType');
        const storedVehicle = await AsyncStorage.getItem('vehicle');
        const storedModel = await AsyncStorage.getItem('model');

        if (storedProfileImage) {
            setProfileImage({uri: storedProfileImage});
        }
        setFirstName(storedFirstName || '');
        setLastName(storedLastName || '');
        setNickname(storedNickname || '');
        setAge(Number(storedAge) || 0);
        setVehicleType(storedVehicleType || '');
        setVehicle(storedVehicle || '');
        setModel(storedModel || '');
    };

    const updateProfileImage = async (uri) => {
        if (uri) {
            setProfileImage({uri});
            await AsyncStorage.setItem('profileImage', uri);
        }
    }

    const updateImage = async () => {
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            console.log('Permission to access camera roll was denied');
            alert('Permission to access camera roll was denied');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.cancelled && result.uri) {
            await updateProfileImage(result.uri);
        }
    };

    const updateFirstName = async (value) => {
        if (value !== null) {
            setFirstName(value);
            await deviceSave('firstName', value);
        }
    };

    const updateLastName = async (value) => {
        if (value !== null) {
            setLastName(value);
            await deviceSave('lastName', value);
        }
    };

    const updateNickname = async (value) => {
        if (value !== null) {
            setNickname(value);
            await deviceSave('nickname', value);
        }
    };

    const updateAge = async (value) => {
        if (value !== null) {
            setAge(value);
            await deviceSave('age', value);
        }
    };

    const updateVehicleType = async (value) => {
        if (value !== null) {
            setVehicleType(value);
            await deviceSave('vehicleType', value);
        }
    };

    const updateVehicle = async (value) => {
        if (value !== null) {
            setVehicle(value);
            await deviceSave('vehicle', value);
        }
    };

    const updateModel = async (value) => {
        if (value !== null) {
            setModel(value);
            await deviceSave('model', value);
        }
    };

    return {
        profileImage,
        updateImage,
        firstName,
        updateFirstName,
        lastName,
        updateLastName,
        nickname,
        updateNickname,
        age,
        updateAge,
        vehicleType,
        updateVehicleType,
        vehicle,
        updateVehicle,
        model,
        updateModel,
    };
};

export default useAccount;
