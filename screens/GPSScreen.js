import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {SpeedometerPanel} from '../components/speedometer/SpeedometerPanel';
import {SpeedometerView} from '../components/speedometer/SpeedometerView';
import {startLocationUpdates} from "../services/LocationService";
import {getSpeedometer, startSpeedometerLoop, stopSpeedometerLoop, subscribe} from "../services/SpeedometerService";
import {useSettingsContext} from '../SettingsContext';
import {convertMsToKphOrMph, convertToKmOrFeet, convertToKmOrMiles} from '../utils/convertUtils';
import {formatTimer} from '../utils/timeFormatUtils';
import FullScreenPage from './FullScreenPage';

export default function GPSScreen(
    {
        modalVisible,
        setModalVisible
    }
) {
    const [speedometer, setSpeedometer] = useState(getSpeedometer());

    const {
        loading,
        unit,
        statRideTime,
        statStoppedTime,
        statOdometer,
        updateStatRideTime,
        updateStatStoppedTime,
        updateStatOdometer,
    } = useSettingsContext();

    useEffect(() => {
        if (!loading) {
            startLocationUpdates();
            startSpeedometerLoop(
                unit,
                statRideTime,
                statStoppedTime,
                statOdometer,
                updateStatRideTime,
                updateStatStoppedTime,
                updateStatOdometer,
            );

            const unsubscribe = subscribe(() => {
                setSpeedometer({...getSpeedometer()});
            });

            return () => {
                stopSpeedometerLoop();
                unsubscribe();
            };
        }
    }, [loading]);

    return (
        <View style={styles.container}>
            <SpeedometerView speed={convertMsToKphOrMph(speedometer.speed, unit).toFixed(0)}/>

            <SpeedometerPanel
                time={formatTimer(speedometer.time)}
                stopped={formatTimer(speedometer.stopped)}
                altitude={convertToKmOrFeet(speedometer.altitude, unit).toFixed(0)}
                averageSpeed={convertMsToKphOrMph(speedometer.averageSpeed, unit).toFixed(0)}
                maxSpeed={convertMsToKphOrMph(speedometer.maxSpeed, unit).toFixed(0)}
                tripDistance={convertToKmOrMiles(speedometer.distance, unit).toFixed(2)}
            />

            <Modal
                visible={modalVisible}
                animationType='slide'
                supportedOrientations={['portrait', 'landscape']}
                transparent={false}
                onRequestClose={() => setModalVisible(false)}
            >
                <FullScreenPage
                    onClose={() => setModalVisible(false)}
                    speed={speedometer.speed}
                    altitude={speedometer.altitude}
                    maxSpeed={speedometer.maxSpeed}
                    tripDistance={speedometer.distance}
                    time={speedometer.time}
                    stopped={speedometer.stopped}
                    averageSpeed={speedometer.averageSpeed}
                    unit={unit}
                />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});