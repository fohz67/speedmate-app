import * as Location from 'expo-location';
import {useEffect, useRef, useState} from 'react';
import {convertSpeedToKmh, sleekSpeed} from '../speedUtils';
import {formatTime} from '../timerUtils';

const useGPS = () => {
    const [speed, setSpeed] = useState(0);
    const [altitude, setAltitude] = useState(0);
    const [time, setTime] = useState(0);
    const [stopped, setStopped] = useState(0);
    const [totalSpeed, setTotalSpeed] = useState(0);
    const [maxSpeed, setMaxSpeed] = useState(0);
    const [averageSpeed, setAverageSpeed] = useState(0);

    const timeRef = useRef(time);
    const stoppedRef = useRef(stopped);

    timeRef.current = time;
    stoppedRef.current = stopped;

    useEffect(() => {
        let isMounted = true;

        const startLocationUpdates = async () => {
            const {status} = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            await watchPosition(isMounted);
        };

        startLocationUpdates();

        const intervalId = setInterval(() => {
            updateTimers(isMounted, speed);
        }, 1000);

        return () => {
            isMounted = false;
            clearInterval(intervalId);
        };
    }, [speed]);

    const watchPosition = async (isMounted) => {
        await Location.watchPositionAsync(
            {
                accuracy: Location.Accuracy.High,
                timeInterval: 1000,
                distanceInterval: 1,
            },
            (location) => {
                if (isMounted) {
                    updateLocationData(location);
                }
            }
        );
    };

    const updateLocationData = (location) => {
        const speedInKmh = convertSpeedToKmh(location.coords.speed);
        const adjustedSpeed = sleekSpeed(speedInKmh);

        setSpeed(adjustedSpeed);
        setAltitude(location.coords.altitude);

        if (adjustedSpeed > maxSpeed) {
            setMaxSpeed(adjustedSpeed);
        }

        setTotalSpeed(prevTotalSpeed => {
            const newTotalSpeed = prevTotalSpeed + adjustedSpeed;

            if (timeRef.current > 0) {
                setAverageSpeed(newTotalSpeed / timeRef.current);
            }

            return newTotalSpeed;
        });
    };

    const updateTimers = (isMounted, currentSpeed) => {
        if (isMounted) {
            if (currentSpeed > 0) {
                setTime((prevTime) => prevTime + 1);
            } else {
                setStopped((prevStopped) => prevStopped + 1);
            }
        }
    };

    return {
        speed,
        altitude: altitude.toFixed(0),
        time: formatTime(timeRef.current),
        stopped: formatTime(stoppedRef.current),
        averageSpeed: averageSpeed.toFixed(2),
        maxSpeed,
    };
};

export default useGPS;
