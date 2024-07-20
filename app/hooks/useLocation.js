import * as Location from 'expo-location';
import {useEffect, useState} from 'react';

const useLocation = () => {
    const [speed, setSpeed] = useState(0);

    useEffect(() => {
        getSpeed();
    }, []);

    const getSpeed = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            console.log('Permission to access location was denied');
            alert('Permission to access useLocation was denied');
            return;
        }

        const options = {
            accuracy: Location.Accuracy.High,
            timeInterval: 1000,
            distanceInterval: 1
        };

        await Location.watchPositionAsync(options, (location) => setSpeed(location.coords.speed));
    }

    return speed;
};

export default useLocation;
