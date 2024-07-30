import {convertMsToKphOrMph} from "../utils/convertUtils";
import {calculateDistance} from "../utils/distanceUtils";
import {getLocation} from "./LocationService";

const speedometerData = {
    speed: 0,
    averageSpeed: 0,
    maxSpeed: 0,
    distance: 0,
    altitude: 0,
    time: 0,
    stopped: 0,
}

let interval = null;
let speeds = 0;
let prevCoords = null;
const subscribers = [];

const startSpeedometerLoop = async (
    statRideTime,
    statStoppedTime,
    updateStatRideTime,
    updateStatStoppedTime
) => {
    interval = setInterval(() => {
        const location = getLocation();

        speedometerData.altitude = location.altitude;

        if (convertMsToKphOrMph(location.speed) >= 1) {
            updateRideTime(statRideTime, updateStatRideTime);
            updateSpeeds(location);
            updateDistances();
        } else {
            updateStoppedTime(statStoppedTime, updateStatStoppedTime);
            speedometerData.speed = 0;
        }

        subscribers.forEach((callback) => callback());
    }, 1000);
};

const updateRideTime = (statRideTime, updateStatRideTime) => {
    speedometerData.time++;
    statRideTime++;
    updateStatRideTime(statRideTime);
};

const updateSpeeds = (location) => {
    speedometerData.speed = location.speed;
    speeds += location.speed;
    speedometerData.averageSpeed = speeds / speedometerData.time;

    if (location.speed > speedometerData.maxSpeed) {
        speedometerData.speed = location.speed;
    }
};

const updateDistances = (location) => {
    if (prevCoords && prevCoords.latitude && prevCoords.longitude) {
        speedometerData.distance += calculateDistance(
            prevCoords.latitude,
            prevCoords.longitude,
            location.latitude,
            location.longitude
        )
    }

    prevCoords = location;
};

const updateStoppedTime = (statStoppedTime, updateStatStoppedTime) => {
    speedometerData.stopped++;
    statStoppedTime++;
    updateStatStoppedTime(statStoppedTime);
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
