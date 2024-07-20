import {useTranslation} from "react-i18next";

const languages = ['en', 'fr'];

const navigation = [
    {
        active: require('../../assets/house-fill.png'),
        inactive: require('../../assets/house-outline.png')
    },
    {
        active: require('../../assets/user-fill.png'),
        inactive: require('../../assets/user-outline.png')
    },
    {
        active: require('../../assets/settings-fill.png'),
        inactive: require('../../assets/settings-outline.png')
    }
];

const useOptions = () => {
    const {t} = useTranslation();

    return {
        languages: [
            t('english'),
            t('french')
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

export {
    languages,
    navigation,
    useOptions
};
