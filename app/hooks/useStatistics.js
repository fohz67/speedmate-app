import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import saveItem from './useDeviceStorage';

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

    const updateKilometers = async (km) => {
        if (value !== null) {
            setKilometers(km);
            await saveItem('kilometers', km);
        }
    };

    const updateTimeSpent = async (time) => {
        if (value !== null) {
            setTimeSpent(time);
            await saveItem('timeSpent', time);
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
