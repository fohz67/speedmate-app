import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

const useAccount = () => {
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

        loadUserData();
    }, []);

    const saveItem = async (key, value) => {
        if (value !== null) {
            await AsyncStorage.setItem(key, value);
        }
    };

    const updateProfileImage = async (value) => {
        if (value !== null) {
            setProfileImage({uri: value});
            await saveItem('profileImage', value);
        }
    };

    const updateImage = async () => {
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

        if (!result.cancelled && result.uri) {
            await updateProfileImage(result.uri);
        }
    };

    const updateFirstName = async (value) => {
        if (value !== null) {
            setFirstName(value);
            await saveItem('firstName', value);
        }
    };

    const updateLastName = async (value) => {
        if (value !== null) {
            setLastName(value);
            await saveItem('lastName', value);
        }
    };

    const updateNickname = async (value) => {
        if (value !== null) {
            setNickname(value);
            await saveItem('nickname', value);
        }
    };

    const updateAge = async (value) => {
        if (value !== null) {
            setAge(value);
            await saveItem('age', String(value));
        }
    };

    const updateVehicleType = async (value) => {
        if (value !== null) {
            setVehicleType(value);
            await saveItem('vehicleType', value);
        }
    };

    const updateVehicle = async (value) => {
        if (value !== null) {
            setVehicle(value);
            await saveItem('vehicle', value);
        }
    };

    const updateModel = async (value) => {
        if (value !== null) {
            setModel(value);
            await saveItem('model', value);
        }
    };

    return {
        profileImage,
        setImage: updateImage,
        firstName,
        setFirstName: updateFirstName,
        lastName,
        setLastName: updateLastName,
        nickname,
        setNickname: updateNickname,
        age,
        setAge: updateAge,
        vehicleType,
        setVehicleType: updateVehicleType,
        vehicle,
        setVehicle: updateVehicle,
        model,
        setModel: updateModel,
    };
};

export default useAccount;