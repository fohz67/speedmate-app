import * as Location from 'expo-location';
import {useCallback, useEffect, useRef, useState} from 'react';
import useSettings from '../hooks/useSettings';

const useLocation = () => {
    const {unit} = useSettings();

    const [speed, setSpeed] = useState(0);
    const [altitude, setAltitude] = useState(0);
    const [distance, setDistance] = useState(0);
    const [maxSpeed, setMaxSpeed] = useState(0);
    const [averageSpeed, setAverageSpeed] = useState(0);
    const [timeRide, setTimeRide] = useState(0);
    const [timeAtZero, setTimeAtZero] = useState(0);

    const speedRef = useRef(0);
    const distanceRef = useRef(distance);
    const lastTimeRef = useRef(Date.now());
    const timerRef = useRef(null);

    useEffect(() => {
        const requestLocationPermission = async () => {
            const {status} = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                alert('Permission to access location was denied');
                setError('Permission denied');

                return false;
            }

            return true;
        };

        const startLocationTracking = async () => {
            const hasPermission = await requestLocationPermission();

            if (!hasPermission) {
                return;
            }

            const options = {
                accuracy: Location.Accuracy.High,
                timeInterval: 1000,
                distanceInterval: 1,
            };

            return await Location.watchPositionAsync(options, handleLocationUpdate);
        };

        const handleLocationUpdate = (location) => {
            const {
                speed: locationSpeed,
                altitude,
                latitude,
                longitude
            } = location.coords;

            const convertedSpeed = convertSpeed(locationSpeed);
            const convertedAltitude = convertAltitude(altitude);

            setAltitude(convertedAltitude);

            if (locationSpeed > 0) {
                setSpeed(convertedSpeed);

                if (convertedSpeed > maxSpeed) {
                    setMaxSpeed(convertedSpeed);
                }

                if (prevLocation) {
                    const distanceIncrement = calculateDistance(
                        prevLocation.latitude,
                        prevLocation.longitude,
                        latitude,
                        longitude
                    );

                    distanceRef.current += distanceIncrement;
                    setDistance(distanceRef.current);
                }

                setPrevLocation({latitude, longitude});
            } else {
                setPrevLocation(prevLocation ? {...prevLocation} : null);
            }
        };

        const startTimer = () => {
            timerRef.current = setInterval(() => {
                const now = Date.now();
                const deltaTime = (now - lastTimeRef.current) / 1000;

                lastTimeRef.current = now;

                if (speed > 0) {
                    setTimeRide(prevTimeRide => prevTimeRide + deltaTime);
                    speedRef.current += speed * deltaTime;
                    setAverageSpeed(speedRef.current / (timeRide + deltaTime));
                    setTimeAtZero(0);
                } else {
                    setTimeAtZero(prevTimeAtZero => prevTimeAtZero + deltaTime);
                }
            }, 1000);
        };

        const cleanup = (subscription) => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
            if (subscription) {
                subscription.remove();
            }
        };

        (async () => {
            const subscription = await startLocationTracking();
            startTimer();

            return () => cleanup(subscription);
        })();
    }, [unit]);

    const calculateDistance = useCallback((lat1, lon1, lat2, lon2) => {
        const toRad = angle => angle * (Math.PI / 180);

        const deltaLat = toRad(lat2 - lat1);
        const deltaLon = toRad(lon2 - lon1);
        const a = Math.sin(deltaLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(deltaLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return convertDistance(6371 * c * 1000);
    }, [unit]);

    const convertDistance = useCallback(distanceInMeters => {
        return unit === 1 ? distanceInMeters * 0.000621371 : distanceInMeters / 1000;
    }, [unit]);

    const convertAltitude = useCallback(altitudeInMeters => {
        return unit === 1 ? altitudeInMeters * 3.28084 : altitudeInMeters;
    }, [unit]);

    const convertSpeed = useCallback(speedInMetersPerSecond => {
        const speedInKmh = speedInMetersPerSecond * 3.6;

        return unit === 1 ? speedInKmh * 0.621371 : speedInKmh;
    }, [unit]);

    const formatTime = seconds => {
        const padZero = num => num.toString().padStart(2, '0');

        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;

        return `${padZero(h)}:${padZero(m)}:${padZero(s)}`;
    };

    return {
        speed: convertSpeed(speed),
        altitude: convertAltitude(altitude),
        distance: convertDistance(distance),
        maxSpeed: convertSpeed(maxSpeed),
        averageSpeed: convertSpeed(averageSpeed),
        timeRide: formatTime(Math.floor(timeRide)),
        timeAtZero: formatTime(Math.floor(timeAtZero)),
        error
    };
};

export default useLocation;
