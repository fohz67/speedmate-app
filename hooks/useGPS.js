import * as Location from 'expo-location';
import {useEffect, useRef, useState} from 'react';
import {calculateDistance} from '../utils/distanceUtils';

const useGPS = () => {
    const speedThreshold = 0.1;
    const accuracyThreshold = 10;

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
                    accuracy: Location.Accuracy.Highest,
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
        const locationAccuracy = location.coords.accuracy;
        const safeSpeed = locationSpeed < 0 ? 0 : locationSpeed;

        if (locationAccuracy <= accuracyThreshold) {
            setSpeed(safeSpeed);
            setAltitude(location.coords.altitude);

            if (safeSpeed > speedThreshold) {
                if (safeSpeed > maxSpeed) {
                    setMaxSpeed(safeSpeed);
                }

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
        } else {
            setSpeed(0);
        }
    };

    const updateTimers = () => {
        if (speed > speedThreshold) {
            setTime(prevTime => {
                timeRef.current = prevTime + 1;

                return timeRef.current;
            });

            setTotalSpeed(prevTotalSpeed => {
                const newTotalSpeed = prevTotalSpeed + speed;

                if (timeRef.current > 0) {
                    setAverageSpeed(newTotalSpeed / timeRef.current);
                }

                return newTotalSpeed;
            });
        } else {
            setStopped(prevStopped => {
                stoppedRef.current = prevStopped + 1;

                return stoppedRef.current;
            });
        }
    };

    return {
        speed: speed,
        altitude: altitude,
        time: timeRef.current,
        stopped: stoppedRef.current,
        averageSpeed: averageSpeed,
        maxSpeed: maxSpeed,
        tripDistance: tripDistance,
    };
};

export default useGPS;
