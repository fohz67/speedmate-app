import {useTranslation} from 'react-i18next';
import {useSettingsContext} from '../SettingsContext';

const useUnits = () => {
    //INFO('useUnits called.');
    const {t} = useTranslation();
    const {unit} = useSettingsContext();

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
