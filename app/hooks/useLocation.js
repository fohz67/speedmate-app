import * as Location from 'expo-location';
import {useEffect, useState} from 'react';

const useLocation = () => {
    const [speed, setSpeed] = useState(0);

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                alert('Permission to access useLocation was denied');
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
