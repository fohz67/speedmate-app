import Geolocation, {GeolocationResponse} from '@react-native-community/geolocation';
import {PermissionsAndroid, PermissionStatus, Platform} from 'react-native';

export type LocationCoords = { latitude: number | null; longitude: number | null } | null;

export type LocationMessage = {
    title: string,
    message: string,
    buttonNeutral: string,
    buttonNegative: string,
    buttonPositive: string,
}

export interface LocationData {
    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;
    latitude: number;
    longitude: number;
    speed: number;
}

let locationData: LocationData = {
    accuracy: 0,
    altitude: 0,
    altitudeAccuracy: 0,
    latitude: 0,
    longitude: 0,
    speed: 0,
};

const requestLocationPermission = async (message: LocationMessage): Promise<boolean> => {
    if (Platform.OS === 'ios') {
        return true;
    }

    try {
        const granted: PermissionStatus = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: message.title,
                message: message.message,
                buttonNeutral: message.buttonNeutral,
                buttonNegative: message.buttonNegative,
                buttonPositive: message.buttonPositive,
            }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (error) {
        console.error('🔴 [watchLocation] ==> Requesting permissions failed: ', error)
        return false;
    }
};

export const watchLocation = async (message: LocationMessage): Promise<void> => {
    const hasPermission: boolean = await requestLocationPermission(message);

    if (!hasPermission) {
        console.error('🔴 [watchLocation] ==> Location permissions not granted.');
        return;
    }

    Geolocation.watchPosition(
        (position: GeolocationResponse): void => {
            if (position) {
                locationData = {
                    accuracy: position.coords.accuracy,
                    altitude: position.coords.altitude || 0,
                    altitudeAccuracy: position.coords.altitudeAccuracy || 0,
                    latitude: position.coords.latitude || 0,
                    longitude: position.coords.longitude || 0,
                    speed: position.coords.speed || 0,
                };
            }
        },
        (error: {
            message: string
        }) => console.error('🔴 [watchLocation] ==> Watching position failed: ', error.message),
        {
            enableHighAccuracy: true,
            distanceFilter: 1,
            interval: 1000,
            fastestInterval: 1000,
        }
    );
};

export const getLocation = (): LocationData => locationData;
