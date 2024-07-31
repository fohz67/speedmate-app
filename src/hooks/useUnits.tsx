import {useTranslation} from 'react-i18next';
import {useSettingsContext} from '../SettingsContext';
import {Settings} from './useSettings.tsx';

export interface Unit {
    altitude: string;
    distanceKm: string;
    distanceM: string;
    speed: string;
}

export const useUnits = (): Unit => {
    const {t} = useTranslation();
    const {unit}: Settings = useSettingsContext();

    const units: Unit[] = [
        {
            altitude: t('m'),
            distanceKm: t('km'),
            distanceM: t('meters'),
            speed: t('kph'),
        },
        {
            altitude: t('ft'),
            distanceKm: t('mi'),
            distanceM: t('yards'),
            speed: t('mph'),
        }
    ];

    return units[unit];
};
