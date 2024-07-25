import * as Location from 'expo-location';
import {useEffect, useRef, useState} from 'react';
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
    const [prevLocation, setPrevLocation] = useState(null);

    const speedRef = useRef(0);
    const timerRef = useRef(null);

    useEffect(() => {
        getLocationUpdates();
        startTimer();

        return () => clearInterval(timerRef.current);
    }, []);

    const getLocationUpdates = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            console.log('Permission to access location was denied');
            alert('Permission to access location was denied');
            return;
        }

        const options = {
            accuracy: Location.Accuracy.High,
            timeInterval: 1000,
            distanceInterval: 1,
        };

        await Location.watchPositionAsync(options, (location) => {
            const {
                speed,
                altitude,
                latitude,
                longitude
            } = location.coords;

            setAltitude(convertAltitude(altitude));

            if (speed > 0) {
                setSpeed(convertSpeed(speed));

                if (speed > maxSpeed) {
                    setMaxSpeed(speed);
                }

                if (prevLocation) {
                    const distanceIncrement = calculateDistance(
                        prevLocation.latitude,
                        prevLocation.longitude,
                        latitude,
                        longitude
                    );

                    setDistance(prevDistance => prevDistance + distanceIncrement);
                }

                setPrevLocation({latitude, longitude});
            }
        });
    };

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setTimeRide(prevTimeRide => {
                if (speed > 0) {
                    speedRef.current += speed;
                    setAverageSpeed(speedRef.current / (prevTimeRide + 1));
                    return prevTimeRide + 1;
                }

                return prevTimeRide;
            });

            setTimeAtZero(prevTimeAtZero => {
                if (speed <= 0) {
                    return prevTimeAtZero + 1;
                }

                return prevTimeAtZero;
            });
        }, 1000);
    };

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const toRad = angle => angle * (Math.PI / 180);

        const deltaLat = toRad(lat2 - lat1);
        const deltaLon = toRad(lon2 - lon1);
        const a =
            Math.sin(deltaLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(deltaLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const distanceInMeters = 6371 * c * 1000;

        return convertDistance(distanceInMeters);
    };

    const convertDistance = distanceInMeters => {
        return unit === 1 ? distanceInMeters * 0.000621371 : distanceInMeters / 1000;
    };

    const convertAltitude = altitudeInMeters => {
        return unit === 1 ? altitudeInMeters * 3.28084 : altitudeInMeters;
    };

    const convertSpeed = speedInMetersPerSecond => {
        const speedInKmh = speedInMetersPerSecond * 3.6;

        return unit === 1 ? speedInKmh * 0.621371 : speedInKmh;
    };

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
        timeRide: formatTime(timeRide),
        timeAtZero: formatTime(timeAtZero),
    };
};

export default useLocation;
