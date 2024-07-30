import {useTranslation} from 'react-i18next';
import {useSettingsContextService} from '../SettingsContext';

const useUnits = () => {
    const {t} = useTranslation();
    const {unit} = useSettingsContextService();

    return [
        {
            altitude: t('m'),
            distanceKm: t('km'),
            speed: t('kph'),
            distanceM: t('meters'),
        },
        {
            altitude: t('ft'),
            distanceKm: t('mi'),
            speed: t('mph'),
            distanceM: t('yards'),
        }
    ][unit];
};

export default useUnits;
