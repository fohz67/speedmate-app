import * as Location from 'expo-location';
import {ERROR} from "../utils/logUtils";

let locationData = {
    accuracy: 0,
    altitude: 0,
    altitudeAccuracy: 0,
    latitude: null,
    longitude: null,
    speed: 0,
};

const startLocationUpdates = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
        ERROR('Location permissions not granted.');
        return;
    }

    await Location.watchPositionAsync(
        {
            accuracy: Location.Accuracy.BestForNavigation,
            distanceInterval: 0,
            timeInterval: 1000,
        },
        (location) => {
            if (location) {
                locationData = {
                    accuracy: location.coords.accuracy,
                    altitude: location.coords.altitude,
                    altitudeAccuracy: location.coords.altitudeAccuracy,
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    speed: location.coords.speed,
                };
            }
        }
    );
};

const getLocation = () => {
    return locationData;
};

export {
    startLocationUpdates,
    getLocation
};
