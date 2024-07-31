import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Modal, StyleSheet, View} from "react-native";
import {SpeedometerArc} from "../components/speedometer/SpeedometerArc.tsx";
import {SpeedometerDashboard} from "../components/speedometer/SpeedometerDashboard.tsx";
import {Settings} from '../hooks/useSettings.tsx';
import {watchLocation} from "../services/LocationService.tsx";
import {getSpeedometer, startSpeedometer, stopSpeedometer, subscribe} from "../services/SpeedometerService.tsx";
import {useSettingsContext} from "../SettingsContext.tsx";
import {convertMsToKphOrMph, convertToKmOrFeet, convertToKmOrMiles} from "../utilitaries/convertor.tsx";
import {formatTimer} from "../utilitaries/time.tsx";
import {GPSFullScreen} from "./GPSFullScreen.tsx";

export default function GPSScreen({modalVisible, setModalVisible}: any): JSX.Element {
    const [speedometer, setSpeedometer] = useState(getSpeedometer());
    const {t} = useTranslation();

    const {
        loading,
        unit,
        statRideTime, updateStatRideTime,
        statStoppedTime, updateStatStoppedTime,
        statOdometer, updateStatOdometer,
    }: Settings = useSettingsContext();

    useEffect(() => {
        console.info('ℹ️ [GPSScreen] at useEffect ==> loading settings...');

        if (!loading) {
            console.info('✅ [GPSScreen] at useEffect ==> settings loaded ✅.');

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

    return (
        <View style={styles.container}>
            <SpeedometerArc speed={convertMsToKphOrMph(speedometer.speed, unit)}/>
            <SpeedometerDashboard
                altitude={convertToKmOrFeet(speedometer.altitude, unit).toFixed(0)}
                averageSpeed={convertMsToKphOrMph(speedometer.averageSpeed, unit).toFixed(0)}
                distance={convertToKmOrMiles(speedometer.distance, unit).toFixed(2)}
                maxSpeed={convertMsToKphOrMph(speedometer.maxSpeed, unit).toFixed(0)}
                stopped={formatTimer(speedometer.stopped)}
                time={formatTimer(speedometer.time)}
            />
            <Modal
                visible={modalVisible}
                animationType='slide'
                supportedOrientations={['portrait', 'landscape']}
                transparent={false}
                onRequestClose={() => setModalVisible(false)}
            >
                <GPSFullScreen
                    altitude={speedometer.altitude}
                    averageSpeed={speedometer.averageSpeed}
                    distance={speedometer.distance}
                    maxSpeed={speedometer.maxSpeed}
                    speed={speedometer.speed}
                    stopped={speedometer.stopped}
                    time={speedometer.time}
                    unit={unit}
                    onClose={() => setModalVisible(false)}
                />
            </Modal>
        </View>
    );
};

const styles: any = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});
