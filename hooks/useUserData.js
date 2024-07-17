// hooks/useUserData.js
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useUserData = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [name, setName] = useState(null);
    const [vehicle, setVehicle] = useState(null);
    const [model, setModel] = useState(null);

    useEffect(() => {
        const loadUserData = async () => {
            const profileImage = await AsyncStorage.getItem('profileImage');
            const name = await AsyncStorage.getItem('name');
            const vehicle = await AsyncStorage.getItem('vehicle');
            const model = await AsyncStorage.getItem('model');

            setProfileImage(profileImage);
            setName(name);
            setVehicle(vehicle);
            setModel(model);
        };

        loadUserData();
    }, []);

    const saveItem = async (key, value) => {
        await AsyncStorage.setItem(key, value);
    };

    const updateProfileImage = async (image) => {
        setProfileImage(image);
        await saveItem('profileImage', image);
    };

    const updateName = async (name) => {
        setName(name);
        await saveItem('name', name);
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
        updateProfileImage,
        name,
        updateName,
        vehicle,
        updateVehicle,
        model,
        updateModel,
    };
};

export default useUserData;