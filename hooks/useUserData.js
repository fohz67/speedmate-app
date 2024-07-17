import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

const useUserData = () => {
    const [profileImage, setProfileImage] = useState(require('../assets/default-picture.png'));
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nickname, setNickname] = useState('');
    const [age, setAge] = useState(0);
    const [vehicleType, setVehicleType] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [model, setModel] = useState('');

    useEffect(() => {
        const loadUserData = async () => {
            const storedProfileImage = await AsyncStorage.getItem('profileImage');
            const storedFirstName = await AsyncStorage.getItem('firstName');
            const storedLastName = await AsyncStorage.getItem('lastName');
            const storedNickname = await AsyncStorage.getItem('nickname');
            const storedAge = Number(await AsyncStorage.getItem('age'));
            const storedVehicleType = await AsyncStorage.getItem('vehicleType');
            const storedVehicle = await AsyncStorage.getItem('vehicle');
            const storedModel = await AsyncStorage.getItem('model');

            if (storedProfileImage) {
                setProfileImage({uri: storedProfileImage});
            }
            setFirstName(storedFirstName || '');
            setLastName(storedLastName || '');
            setNickname(storedNickname || '');
            setAge(storedAge || 0);
            setVehicleType(storedVehicleType || '');
            setVehicle(storedVehicle || '');
            setModel(storedModel || '');
        };

        loadUserData();
    }, []);

    const saveItem = async (key, value) => {
        if (value !== null) {
            await AsyncStorage.setItem(key, value);
        }
    };

    const updateProfileImage = async (imageUri) => {
        if (imageUri) {
            setProfileImage({uri: imageUri});
            await saveItem('profileImage', imageUri);
        }
    };

    const pickImage = async () => {
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.cancelled) {
            await updateProfileImage(result.uri);
        }
    };

    const updateFirstName = async (name) => {
        setFirstName(name);
        await saveItem('firstName', name);
    };

    const updateLastName = async (name) => {
        setLastName(name);
        await saveItem('lastName', name);
    };

    const updateNickname = async (name) => {
        setNickname(name);
        await saveItem('nickname', name);
    };

    const updateAge = async (name) => {
        setAge(name);
        await saveItem('age', String(name));
    };

    const updateVehicleType = async (name) => {
        setVehicleType(name);
        await saveItem('vehicleType', name);
    };

    const updateVehicle = async (vehicle) => {
        setVehicle(vehicle);
        await saveItem('vehicle', vehicle);
    };

    const updateModel = async (model) => {
        setModel(model);
        await saveItem('model', model);
    };

    return {
        profileImage,
        pickImage,
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

export default useUserData;