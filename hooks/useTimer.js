import {useEffect, useRef, useState} from 'react';
import {useSettingsContext} from '../SettingsContext';
import {convertMsToKphOrMph} from "../utils/convertUtils";
import {INFO} from "../utils/logUtils";

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
        INFO('Speed has been updated.');
        speedRef.current = getSpeed();
    }, [getSpeed]);

    useEffect(() => {
        //INFO('useTimer hook has been invoked.');
        let intervalId;

        const updateStats = () => {
            //INFO('Updating stats...');
            const protectedSpeed = speedRef.current;
            const convertedSpeed = convertMsToKphOrMph(speedRef.current, unit);

            if (convertedSpeed >= 1) {
                //INFO('Speed is ok.');
                updateStatRideTime(statRideTime + 1);
                setTime(value => value + 1);

                setTotalSpeed(value => {
                    const totalSpeed = value + protectedSpeed;
                    setAverageSpeed(totalSpeed / (time + 1));
                    //INFO('Total speed updated.');
                    return totalSpeed;
                });
            } else {
                //INFO('Bad speed.');
                updateStatStoppedTime(statStoppedTime + 1);
                setStopped(value => value + 1);
            }
        };

        intervalId = setInterval(updateStats, 1000);

        return () => {
            //INFO('useTimer hook has been destroyed.');
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
