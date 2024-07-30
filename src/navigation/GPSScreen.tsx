import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {View} from "react-native";
import {watchLocation} from "../services/LocationService.tsx";
import {getSpeedometer, startSpeedometer, stopSpeedometer, subscribe} from "../services/SpeedometerService.tsx";
import {useSettingsContext} from "../SettingsContext.tsx";

export default function GPSScreen({modalVisible, setModalVisible}: any): JSX.Element {
    const [speedometer, setSpeedometer] = useState(getSpeedometer());

    const {
        loading,
        unit,
        statRideTime, updateStatRideTime,
        statStoppedTime, updateStatStoppedTime,
        statOdometer, updateStatOdometer,
    } = useSettingsContext();

    const {t} = useTranslation();

    useEffect(() => {
        console.info('ℹ️ [GPSScreen] at useEffect ==> loading settings...');

        if (!loading) {
            console.info('ℹ️ [GPSScreen] at useEffect ==> settings loaded ✅.');

            watchLocation({
                title: t('locationPermissionTitle'),
                message: t('locationPermissionMessage'),
                buttonNeutral: ('locationPermissionButtonNeutral'),
                buttonNegative: ('locationPermissionButtonNegative'),
                buttonPositive: t('locationPermissionButtonPositive')
            });

            startSpeedometer(
                unit,
                statRideTime, updateStatRideTime,
                statStoppedTime, updateStatStoppedTime,
                statOdometer, updateStatOdometer,
            );

            const unsubscribe = subscribe(() => setSpeedometer({...getSpeedometer()}));

            return () => {
                stopSpeedometer();
                unsubscribe();
            };
        }
    }, [loading]);

    console.log(`
SETTINGS
---------
Loading: ${loading}
Unit: ${unit}
Stat Ride Time: ${statRideTime}
Stat Stopped Time: ${statStoppedTime}
Stat Odometer: ${statOdometer}

SPEEDOMETER
-----------
Speed: ${speedometer.speed}
Max Speed: ${speedometer.maxSpeed}
Average Speed: ${speedometer.averageSpeed}
Distance: ${speedometer.distance}
Altitude: ${speedometer.altitude}
Altitude Accuracy: ${speedometer.altitudeAccuracy}
Accuracy: ${speedometer.accuracy}
Time: ${speedometer.time}
Stopped: ${speedometer.stopped}
`);

    return (
        <View></View>
    )
};
