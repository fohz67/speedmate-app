import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import deviceSave from '../storage';

const useStatistics = () => {
    const [odo, setOdo] = useState(0);
    const [storedTime, setTimeSpent] = useState(0);

    useEffect(() => {
        loadStatistics();
    }, []);

    const loadStatistics = async () => {
        const storedOdo = await AsyncStorage.getItem('odo');
        const storedTime = await AsyncStorage.getItem('time');

        setOdo(storedOdo ? parseFloat(storedOdo) : 0);
        setTimeSpent(storedTime ? parseFloat(storedTime) : 0);
    };

    const updateOdo = async (value) => {
        if (value !== null) {
            setOdo(value);
            await deviceSave('odo', value);
        }
    };

    const updateTime = async (value) => {
        if (value !== null) {
            setTimeSpent(value);
            await deviceSave('storedTime', value);
        }
    };

    return {
        odo,
        updateOdo,
        storedTime,
        updateTime,
    };
};

export default useStatistics;
