import {convertMsToKphOrMph} from "../utilitaries/convertor";
import {calculateDistance} from "../utilitaries/distance";
import {getLocation, LocationCoords, LocationData} from "./LocationService";

interface SpeedometerData {
    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;
    averageSpeed: number;
    distance: number;
    maxSpeed: number;
    speed: number;
    stopped: number;
    time: number;
}

const speedometerData: SpeedometerData = {
    accuracy: 0,
    altitude: 0,
    altitudeAccuracy: 0,
    averageSpeed: 0,
    distance: 0,
    maxSpeed: 0,
    speed: 0,
    stopped: 0,
    time: 0,
};

let interval: NodeJS.Timeout | null = null;
let totalSpeed: number = 0;
let previousCoordinates: LocationCoords = null;
const subscribers: Array<() => void> = [];

const startSpeedometer = async (
    unit: number,
    statRideTime: number, updateStatRideTime: (value: number) => void,
    statStoppedTime: number, updateStatStoppedTime: (value: number) => void,
    statOdometer: number, updateStatOdometer: (value: number) => void
): Promise<void> => {
    interval = setInterval((): void => {
        const location: LocationData = getLocation();

        speedometerData.altitude = location.altitude || 0;
        speedometerData.altitudeAccuracy = location.altitudeAccuracy || 0;
        speedometerData.accuracy = location.accuracy;

        if (convertMsToKphOrMph(location.speed, unit) >= 1) {
            speedometerData.time++;
            statRideTime++;
            updateStatRideTime(statRideTime);

            speedometerData.speed = location.speed;
            totalSpeed += location.speed;

            speedometerData.averageSpeed = totalSpeed / speedometerData.time;

            if (location.speed > speedometerData.maxSpeed) {
                speedometerData.maxSpeed = location.speed;
            }

            if (previousCoordinates && previousCoordinates.latitude !== null && previousCoordinates.longitude !== null) {
                speedometerData.distance += calculateDistance(
                    previousCoordinates.latitude,
                    previousCoordinates.longitude,
                    location.latitude || 0,
                    location.longitude || 0
                );
            }

            previousCoordinates = {latitude: location.latitude, longitude: location.longitude};

            statOdometer += speedometerData.distance;
            updateStatOdometer(statOdometer);
        } else {
            speedometerData.stopped++;
            statStoppedTime++;
            updateStatStoppedTime(statStoppedTime);

            speedometerData.speed = 0;
        }

        subscribers.forEach((callback) => callback());
    }, 1000);
};

const stopSpeedometer = (): void => {
    if (interval) {
        clearInterval(interval);
    }
};

const getSpeedometer = (): SpeedometerData => speedometerData;

const subscribe = (callback: () => void): () => void => {
    subscribers.push(callback);

    return (): void => {
        const index: number = subscribers.indexOf(callback);

        if (index !== -1) {
            subscribers.splice(index, 1);
        }
    };
};

export {
    startSpeedometer, stopSpeedometer, getSpeedometer,
    subscribe,
};
