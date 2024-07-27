import {useTranslation} from "react-i18next";

const useOptions = () => {
    const {t} = useTranslation();

    return {
        languages: [
            t('english'),
            t('french')
        ],
        units: [
            t('metric'),
            t('imperial'),
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

export default useOptions;
