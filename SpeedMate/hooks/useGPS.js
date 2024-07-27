import * as Location from 'expo-location';
import {useEffect, useRef, useState} from 'react';
import {useSettingsContext} from "../SettingsContext";
import {calculateDistance, formatTime} from '../timeUtils';

const useGPS = () => {
    const {unit} = useSettingsContext();

    const [speed, setSpeed] = useState(0);
    const [altitude, setAltitude] = useState(0);
    const [time, setTime] = useState(0);
    const [stopped, setStopped] = useState(0);
    const [totalSpeed, setTotalSpeed] = useState(0);
    const [maxSpeed, setMaxSpeed] = useState(0);
    const [averageSpeed, setAverageSpeed] = useState(0);
    const [tripDistance, setTripDistance] = useState(0);

    const previousLocation = useRef(null);
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

            await watchPosition();
        };

        const watchPosition = async () => {
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

        startLocationUpdates();

        const intervalId = setInterval(() => {
            if (isMounted) {
                updateTimers(speed);
            }
        }, 1000);

        return () => {
            isMounted = false;
            clearInterval(intervalId);
        };
    }, [speed]);

    const updateLocationData = (location) => {
        const locationSpeed = location.coords.speed;

        setSpeed(location.coords.speed);
        setAltitude(location.coords.altitude);

        if (locationSpeed > 0) {
            if (locationSpeed > maxSpeed) {
                setMaxSpeed(locationSpeed);
            }

            setTotalSpeed(prevTotalSpeed => {
                const newTotalSpeed = prevTotalSpeed + locationSpeed;

                if (timeRef.current > 0) {
                    setAverageSpeed(newTotalSpeed / timeRef.current);
                }

                return newTotalSpeed;
            });

            if (previousLocation.current) {
                const {
                    latitude: prevLat,
                    longitude: prevLon
                } = previousLocation.current;

                const {
                    latitude: currLat,
                    longitude: currLon
                } = location.coords;

                const distance = calculateDistance(prevLat, prevLon, currLat, currLon);

                setTripDistance(prevTripDistance => prevTripDistance + distance);
            }

            previousLocation.current = location.coords;
        }
    };

    const updateTimers = (currentSpeed) => {
        if (currentSpeed > 0) {
            setTime(prevTime => prevTime + 1);
        } else {
            setStopped(prevStopped => prevStopped + 1);
        }
    };

    return {
        speed,
        altitude: altitude,
        time: formatTime(timeRef.current),
        stopped: formatTime(stoppedRef.current),
        averageSpeed: averageSpeed,
        maxSpeed,
        tripDistance: tripDistance,
    };
};

export default useGPS;
