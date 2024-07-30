import {convertMsToKphOrMph} from "../utils/convertUtils";
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

const startSpeedometerLoop = async () => {
    interval = setInterval(() => {
        const location = getLocation();

        speedometerData.altitude = location.altitude;

        if (convertMsToKphOrMph(location.speed) >= 1) {
            speedometerData.time++;
            speedometerData.speed = location.speed;
            speeds += location.speed;
            speedometerData.averageSpeed = speeds / speedometerData.time;

            if (location.speed > speedometerData.maxSpeed) {
                speedometerData.speed = location.speed;
            }
        } else {
            speedometerData.stopped++;
            speedometerData.speed = 0;
        }

        subscribers.forEach((callback) => callback());
    }, 1000);
};

const stopSpeedometerLoop = () => {
    if (interval) {
        clearInterval(interval);
    }
}

const getSpeedometer = () => {
    return speedometerData;
}

const subscribers = [];

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
