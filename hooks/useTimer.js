import {useEffect, useRef, useState} from 'react';
import {useSettingsContext} from '../SettingsContext';
import {convertMsToKphOrMph} from "../utils/convertUtils";

const useTimer = (getSpeed) => {
    const {
        unit,
        statRideTime,
        statStoppedTime,
        updateStatRideTime,
        updateStatStoppedTime,
    } = useSettingsContext();

    const [time, setTime] = useState(0);
    const [stopped, setStopped] = useState(0);
    const [totalSpeed, setTotalSpeed] = useState(0);
    const [averageSpeed, setAverageSpeed] = useState(0);

    const speedRef = useRef(getSpeed());

    useEffect(() => {
        speedRef.current = getSpeed();
    }, [getSpeed]);

    useEffect(() => {
        let intervalId;

        const updateStats = () => {
            const protectedSpeed = speedRef.current;
            const convertedSpeed = convertMsToKphOrMph(speedRef.current, unit);

            if (convertedSpeed >= 1) {
                updateStatRideTime(statRideTime + 1);
                setTime(value => value + 1);

                setTotalSpeed(value => {
                    const totalSpeed = value + protectedSpeed;
                    setAverageSpeed(totalSpeed / (time + 1));
                    return totalSpeed;
                });
            } else {
                updateStatStoppedTime(statStoppedTime + 1);
                setStopped(value => value + 1);
            }
        };

        intervalId = setInterval(updateStats, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return {
        time,
        stopped,
        averageSpeed,
    };
};

export default useTimer;
