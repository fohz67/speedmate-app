import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import deviceSave from '../storage';

const useStatistics = () => {
    const [kilometers, setKilometers] = useState(0);
    const [timeSpent, setTimeSpent] = useState(0);

    useEffect(() => {
        loadStatistics();
    }, []);

    const loadStatistics = async () => {
        const kilometers = await AsyncStorage.getItem('kilometers');
        const timeSpent = await AsyncStorage.getItem('timeSpent');

        setKilometers(kilometers ? parseFloat(kilometers) : 0);
        setTimeSpent(timeSpent ? parseFloat(timeSpent) : 0);
    };

    const updateKilometers = async (value) => {
        if (value !== null) {
            setKilometers(value);
            await deviceSave('kilometers', value);
        }
    };

    const updateTimeSpent = async (value) => {
        if (value !== null) {
            setTimeSpent(value);
            await deviceSave('timeSpent', value);
        }
    };

    return {
        kilometers,
        updateKilometers,
        timeSpent,
        updateTimeSpent,
    };
};

export default useStatistics;
