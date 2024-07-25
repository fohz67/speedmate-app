import {useTranslation} from "react-i18next";
import useSettings from "./useSettings";

const useUnits = () => {
    const {t} = useTranslation();
    const {unit} = useSettings();

    return unit === 0
        ? {
            speed: t('kmh'),
            distance: t('km'),
            altitude: t('m'),
        }
        : {
            speed: t('mph'),
            distance: t('mi'),
            altitude: t('ft'),
        };
};

export default useUnits;
