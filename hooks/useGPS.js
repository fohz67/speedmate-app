import * as Location from 'expo-location';
import {useEffect, useRef, useState} from 'react';
import {useSettingsContext} from "../SettingsContext";
import {convertMsToKphOrMph} from "../utils/convertUtils";
import {calculateDistance} from '../utils/distanceUtils';
import {ERROR} from "../utils/logUtils";

const useGPS = () => {
    const {
        unit,
        statOdometer,
        updateStatOdometer,
        accuracyThreshold,
    } = useSettingsContext();

    const [speed, setSpeed] = useState(0);
    const [altitude, setAltitude] = useState(0);
    const [maxSpeed, setMaxSpeed] = useState(0);
    const [tripDistance, setTripDistance] = useState(0);

    const previousLocation = useRef(null);

    useEffect(() => {
        let isMounted = true;
        //INFO('useGPS hook has been invoked and mounted.');

        const startLocationUpdates = async () => {
            //INFO('Requesting location permissions asynchronously...');
            const {status} = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                ERROR('Location permissions not granted.');
                return;
            }

            await watchPosition();
        };

        const watchPosition = async () => {
            //INFO('Calling watch position async function...');
            await Location.watchPositionAsync(
                {
                    accuracy: Location.Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 1,
                },
                (location) => {
                    //INFO('Location has been updated.');
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
        const {
            speed: rawSpeed,
            altitude,
            accuracy,
            latitude,
            longitude
        } = location.coords;

        const convertedSpeed = convertMsToKphOrMph(rawSpeed, unit);

        setAltitude(altitude);

        if (convertedSpeed >= 1 && accuracy <= accuracyThreshold) {
            //INFO('Speed and accuracy are ok.');
            setSpeed(rawSpeed);
            setMaxSpeed(value => Math.max(value, rawSpeed));

            if (previousLocation.current) {
                //INFO('Previous location is ok.');
                const prevLocation = previousLocation.current;
                const distance = calculateDistance(
                    prevLocation.latitude,
                    prevLocation.longitude,
                    latitude,
                    longitude
                );

                setTripDistance(value => value + distance);
                await updateStatOdometer(statOdometer + distance);
                //INFO('Odometer has been updated.');
            }

            previousLocation.current = location.coords;
        } else {
            setSpeed(0);
            //INFO('Bad speed or accuracy, speed set to 0.');
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
