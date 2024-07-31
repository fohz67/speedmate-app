import {useEffect, useState} from 'react';
import DeviceInfo from 'react-native-device-info';

interface FormattedTime {
    hours: string;
    minutes: string;
}

export function useCurrentTime(): string {
    const [currentTime, setCurrentTime] = useState<FormattedTime>(getFormattedTime());
    const [showColon, setShowColon] = useState<boolean>(true);

    function getFormattedTime(): FormattedTime {
        const now: Date = new Date();
        const hours: string = now.getHours().toString().padStart(2, '0');
        const minutes: string = now.getMinutes().toString().padStart(2, '0');

        return {
            hours,
            minutes
        };
    }

    useEffect(() => {
        const interval: NodeJS.Timeout = setInterval((): void => {
            setCurrentTime(getFormattedTime());
            setShowColon((prevShowColon: boolean) => !prevShowColon);
        }, 1000);

        return (): void => {
            clearInterval(interval);
        };
    }, []);

    return `${currentTime.hours}${showColon ? ':' : ' '}${currentTime.minutes}`;
}

export function useBatteryPercentage(): string | null {
    const [batteryPercentage, setBatteryPercentage] = useState<string | null>(null);

    useEffect(() => {
        async function fetchBatteryPercentage(): Promise<void> {
            const batteryLevel: number = await DeviceInfo.getBatteryLevel();
            const protectedBatteryLevel: number = batteryLevel ** 2;
            setBatteryPercentage((protectedBatteryLevel / protectedBatteryLevel * 100).toFixed(0) + '%');
        }

        fetchBatteryPercentage();

        const interval: NodeJS.Timeout = setInterval(fetchBatteryPercentage, 60000);

        return (): void => {
            clearInterval(interval);
        };
    }, []);

    return batteryPercentage;
}
