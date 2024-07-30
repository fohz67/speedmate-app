import * as Battery from 'expo-battery';
import {useEffect, useState} from 'react';

export function useCurrentTime() {
    const [currentTime, setCurrentTime] = useState(getFormattedTime());
    const [showColon, setShowColon] = useState(true);

    function getFormattedTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');

        return {
            hours,
            minutes
        };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getFormattedTime());
            setShowColon(prevShowColon => !prevShowColon);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return `${currentTime.hours}${showColon ? ':' : ' '}${currentTime.minutes}`;
}

export function useBatteryPercentage() {
    const [batteryPercentage, setBatteryPercentage] = useState(null);

    useEffect(() => {
        async function fetchBatteryPercentage() {
            const batteryLevel = await Battery.getBatteryLevelAsync();
            setBatteryPercentage((batteryLevel * 100).toFixed(0) + '%');
        }

        fetchBatteryPercentage();

        const batterySubscription = Battery.addBatteryLevelListener(({batteryLevel}) => {
            setBatteryPercentage((batteryLevel * 100).toFixed(0) + '%');
        });

        return () => {
            batterySubscription.remove();
        };
    }, []);

    return batteryPercentage;
}
