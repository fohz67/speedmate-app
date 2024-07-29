import * as Battery from 'expo-battery';
import {useEffect, useState} from 'react';

export function useCurrentTime() {
    const [currentTime, setCurrentTime] = useState(getFormattedTime());
    const [showColon, setShowColon] = useState(true);

    function getFormattedTime() {
        //INFO('Time formatting function has been called.');
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');

        return {
            hours,
            minutes
        };
    }

    useEffect(() => {
        //INFO('usePhoneData hook has need invoked.');
        const interval = setInterval(() => {
            setCurrentTime(getFormattedTime());
            setShowColon(prevShowColon => !prevShowColon);
            //INFO('Current date has been updated.');
        }, 1000);

        return () => {
            clearInterval(interval);
            //INFO('Interval has been cleared and the hook has been destroyed.');
        }
    }, []);

    return `${currentTime.hours}${showColon ? ':' : ' '}${currentTime.minutes}`;
}

export function useBatteryPercentage() {
    const [batteryPercentage, setBatteryPercentage] = useState(null);

    useEffect(() => {
        //INFO('useBatteryPercentage hook has need invoked.');
        async function fetchBatteryPercentage() {
            const batteryLevel = await Battery.getBatteryLevelAsync();
            setBatteryPercentage((batteryLevel * 100).toFixed(0) + '%');
            //INFO('Battery percentage has been updated.');
        }

        fetchBatteryPercentage();

        const batterySubscription = Battery.addBatteryLevelListener(({batteryLevel}) => {
            setBatteryPercentage((batteryLevel * 100).toFixed(0) + '%');
            //INFO('Battery percentage has been updated under the subscription.');
        });

        return () => {
            batterySubscription.remove();
            //INFO('Battery subscription removed and the hook has been destroyed.');
        }
    }, []);

    return batteryPercentage;
}
