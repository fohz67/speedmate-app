import * as Location from 'expo-location';
import {useEffect, useRef, useState} from 'react';

const useLocation = () => {
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

            setAltitude(altitude);

            if (Math.floor(speed) <= 0) {
                return;
            }

            setSpeed(speed);
            setAltitude(altitude);

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

                setDistance((prevDistance) => prevDistance + distanceIncrement);
            }

            setPrevLocation({latitude, longitude});
        });
    };

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setTimeRide((prevTimeRide) => {
                if (Math.floor(speed) > 0) {
                    speedRef.current += speed;
                    setAverageSpeed(speedRef.current / (prevTimeRide + 1));
                    return prevTimeRide + 1;
                }
                return prevTimeRide;
            });

            setTimeAtZero((prevTimeAtZero) => {
                if (Math.floor(speed) <= 0) {
                    return prevTimeAtZero + 1;
                }
                return prevTimeAtZero;
            });
        }, 1000);
    };

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const toRad = (angle) => angle * (Math.PI / 180);

        const earthRadius = 6371;
        const deltaLat = toRad(lat2 - lat1);
        const deltaLon = toRad(lon2 - lon1);
        const a =
            Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return earthRadius * c;
    };

    const formatTime = (seconds) => {
        const padZero = (num) => num.toString().padStart(2, '0');

        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;

        return `${padZero(h)}:${padZero(m)}:${padZero(s)}`;
    };

    return {
        speed,
        altitude,
        distance,
        maxSpeed,
        averageSpeed,
        timeRide: formatTime(timeRide),
        timeAtZero: formatTime(timeAtZero),
    };
};

export default useLocation;
