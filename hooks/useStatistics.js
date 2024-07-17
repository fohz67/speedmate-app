import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStatistics = () => {
    const [kilometers, setKilometers] = useState(0);
    const [timeSpent, setTimeSpent] = useState(0);

    useEffect(() => {
        const loadStatistics = async () => {
            const kilometers = await AsyncStorage.getItem('kilometers');
            const timeSpent = await AsyncStorage.getItem('timeSpent');

            setKilometers(kilometers ? parseFloat(kilometers) : 0);
            setTimeSpent(timeSpent ? parseFloat(timeSpent) : 0);
        };

        loadStatistics();
    }, []);

    const saveItem = async (key, value) => {
        await AsyncStorage.setItem(key, value.toString());
    };

    const updateKilometers = async (km) => {
        setKilometers(km);
        await saveItem('kilometers', km);
    };

    const updateTimeSpent = async (time) => {
        setTimeSpent(time);
        await saveItem('timeSpent', time);
    };

    return {
        kilometers,
        updateKilometers,
        timeSpent,
        updateTimeSpent,
    };
};

export default useStatistics;