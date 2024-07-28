import {useEffect, useRef, useState} from 'react';

const useTimer = (getSpeed) => {
    const speedThreshold = 0.1;

    const [time, setTime] = useState(0);
    const [stopped, setStopped] = useState(0);
    const [totalSpeed, setTotalSpeed] = useState(0);
    const [averageSpeed, setAverageSpeed] = useState(0);

    const timeRef = useRef(time);
    const stoppedRef = useRef(stopped);

    timeRef.current = time;
    stoppedRef.current = stopped;

    useEffect(() => {
        let isMounted = true;

        const intervalId = setInterval(() => {
            if (isMounted) {
                const currentSpeed = getSpeed();

                if (currentSpeed > speedThreshold) {
                    setTime((prevTime) => {
                        const newTime = prevTime + 1;
                        timeRef.current = newTime;
                        return newTime;
                    });

                    setTotalSpeed((prevTotalSpeed) => {
                        const newTotalSpeed = prevTotalSpeed + currentSpeed;
                        setAverageSpeed(newTotalSpeed / timeRef.current);
                        return newTotalSpeed;
                    });
                } else {
                    setStopped((prevStopped) => {
                        const newStopped = prevStopped + 1;
                        stoppedRef.current = newStopped;
                        return newStopped;
                    });
                }
            }
        }, 1000);

        return () => {
            isMounted = false;
            clearInterval(intervalId);
        };
    }, [getSpeed]);

    return {
        time: timeRef.current,
        stopped: stoppedRef.current,
        averageSpeed: averageSpeed,
    };
};

export default useTimer;
