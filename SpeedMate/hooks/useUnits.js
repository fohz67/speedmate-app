import {useTranslation} from "react-i18next";

const useUnits = () => {
    const {t} = useTranslation();

    const unit = 0;

    return [
        {
            altitude: t('m'),
            distance: t('km'),
            speed: t('kph')
        },
        {
            altitude: t('ft'),
            distance: t('mi'),
            speed: t('mph')
        }
    ][unit];
};

export default useUnits;
