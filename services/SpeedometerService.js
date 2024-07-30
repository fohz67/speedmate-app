import {convertMsToKphOrMph} from "../utils/convertUtils";
import {calculateDistance} from "../utils/distanceUtils";
import {getLocation} from "./LocationService";

const speedometerData = {
    accuracy: 0,
    altitude: 0,
    altitudeAccuracy: 0,
    averageSpeed: 0,
    distance: 0,
    maxSpeed: 0,
    speed: 0,
    stopped: 0,
    time: 0,
}

let interval = null;
let speeds = 0;
let prevCoords = null;
const subscribers = [];

const startSpeedometerLoop = async (
    unit,
    statRideTime,
    statStoppedTime,
    statOdometer,
    updateStatRideTime,
    updateStatStoppedTime,
    updateStatOdometer,
) => {
    interval = setInterval(() => {
        const location = getLocation();

        speedometerData.altitude = location.altitude;
        speedometerData.altitudeAccuracy = location.altitudeAccuracy;
        speedometerData.accuracy = location.accuracy;

        if (convertMsToKphOrMph(location.speed, unit) >= 1) {
            speedometerData.time++;
            statRideTime++;
            updateStatRideTime(statRideTime);

            speedometerData.speed = location.speed;
            speeds += location.speed;

            speedometerData.averageSpeed = speeds / speedometerData.time;

            if (location.speed > speedometerData.maxSpeed) {
                speedometerData.maxSpeed = location.speed;
            }

            if (prevCoords && prevCoords.latitude && prevCoords.longitude) {
                speedometerData.distance += calculateDistance(
                    prevCoords.latitude,
                    prevCoords.longitude,
                    location.latitude,
                    location.longitude
                )
            }

            prevCoords = location;

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

const stopSpeedometerLoop = () => {
    if (interval) {
        clearInterval(interval);
    }
};

const getSpeedometer = () => {
    return speedometerData;
};

const subscribe = (callback) => {
    subscribers.push(callback);

    return () => {
        const index = subscribers.indexOf(callback);

        if (index !== -1) {
            subscribers.splice(index, 1);
        }
    };
};

export {
    startSpeedometerLoop,
    stopSpeedometerLoop,
    getSpeedometer,
    subscribe,
};
