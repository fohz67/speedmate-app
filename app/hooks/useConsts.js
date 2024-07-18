import {useTranslation} from "react-i18next";

const languages = ['en', 'fr'];

const useIcons = () => {
    const {t} = useTranslation();

    return {
        [t('home')]: {
            active: require('../../assets/house-fill.png'),
            inactive: require('../../assets/house-outline.png')
        },
        [t('account')]: {
            active: require('../../assets/user-fill.png'),
            inactive: require('../../assets/user-outline.png')
        },
        [t('settings')]: {
            active: require('../../assets/settings-fill.png'),
            inactive: require('../../assets/settings-outline.png')
        }
    };
}

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

export {useConsts, languages, useIcons};
