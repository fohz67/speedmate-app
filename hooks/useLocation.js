import {useEffect, useState} from 'react';
import * as Location from 'expo-location';

const useLocation = () => {
    const [speed, setSpeed] = useState(0);

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            await Location.watchPositionAsync(
                {accuracy: Location.Accuracy.High, timeInterval: 1000, distanceInterval: 1},
                (location) => {
                    setSpeed(location.coords.speed);
                }
            );
        })();
    }, []);

    return speed;
};

export default useLocation;