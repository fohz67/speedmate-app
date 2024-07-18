import {useTranslation} from "react-i18next";

const languages = ['en', 'fr'];

const useConsts = () => {
    const {t} = useTranslation();

    return {
        appAppearances: [
            t('auto'),
            t('light'),
            t('night')],
        languages: [
            t('english'),
            t('french')
        ],
        orientationLocks: [
            t('auto'),
            t('vertical'),
            t('horizontal')
        ],
        speedometerSides: [
            t('left'),
            t('right')
        ],
        temperatureUnits: [
            t('celcius'),
            t('fahrenheit')
        ],
        units: [
            t('kmh'),
            t('mph'),
            t('kn')
        ],
        vehicleTypes: [
            t('car'),
            t('motorbike'),
            t('electricScooter'),
            t('scooter'),
            t('bike')
        ],
    };
};

export {useConsts, languages};
