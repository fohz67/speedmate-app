import * as Location from 'expo-location';
import {ERROR} from "../utils/logUtils";

let locationData = {
    speed: 0,
    altitude: 0,
    latitude: null,
    longitude: null,
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
            timeInterval: 1000,
            distanceInterval: 0,
        },
        (location) => {
            if (location) {
                locationData = {
                    speed: location.coords.speed,
                    altitude: location.coords.altitude,
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
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
