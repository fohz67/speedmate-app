import * as Location from 'expo-location';
import {useEffect, useRef, useState} from 'react';
import {useSettingsContext} from "../SettingsContext";
import {calculateDistance} from '../utils/distanceUtils';

const useGPS = () => {
    const speedThreshold = 0.1;
    const accuracyThreshold = 10;

    const {
        statOdometer,
        updateStatOdometer
    } = useSettingsContext();

    const [speed, setSpeed] = useState(0);
    const [altitude, setAltitude] = useState(0);
    const [maxSpeed, setMaxSpeed] = useState(0);
    const [tripDistance, setTripDistance] = useState(0);

    const previousLocation = useRef(null);

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

        return () => {
            isMounted = false;
        };
    }, []);

    const updateLocationData = async (location) => {
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
                    const odometer = statOdometer + distance;

                    setTripDistance(prevTripDistance => prevTripDistance + distance);
                    await updateStatOdometer(odometer);
                }

                previousLocation.current = location.coords;
            }
        } else {
            setSpeed(0);
        }
    };

    return {
        speed,
        altitude,
        maxSpeed,
        tripDistance,
    };
};

export default useGPS;
