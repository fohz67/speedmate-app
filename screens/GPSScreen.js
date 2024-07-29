import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import SpeedometerPanel from '../components/speedometer/SpeedometerPanel';
import SpeedometerView from '../components/speedometer/SpeedometerView';
import useGPS from '../hooks/useGPS';
import useTimer from '../hooks/useTimer';
import {useSettingsContext} from '../SettingsContext';
import {convertMsToKphOrMph, convertToKmOrFeet, convertToKmOrMiles} from '../utils/convertUtils';
import {formatTime} from '../utils/timerUtils';
import FullScreenPage from './FullScreenPage';

export default function GPSScreen({modalVisible, setModalVisible}) {
    const {
        speed,
        altitude,
        maxSpeed,
        tripDistance
    } = useGPS();

    const {
        time,
        stopped,
        averageSpeed
    } = useTimer(() => speed);

    const {unit} = useSettingsContext();

    return (
        <View style={styles.container}>
            <SpeedometerView speed={convertMsToKphOrMph(speed, unit).toFixed(0)}/>

            <SpeedometerPanel time={formatTime(time)}
                              stopped={formatTime(stopped)}
                              altitude={convertToKmOrFeet(altitude, unit).toFixed(0)}
                              averageSpeed={convertMsToKphOrMph(averageSpeed, unit).toFixed(0)}
                              maxSpeed={convertMsToKphOrMph(maxSpeed, unit).toFixed(0)}
                              tripDistance={convertToKmOrMiles(tripDistance, unit).toFixed(2)}/>

            <Modal
                visible={modalVisible}
                animationType='slide'
                supportedOrientations={['portrait', 'landscape']}
                transparent={false}
                onRequestClose={() => setModalVisible(false)}
            >
                <FullScreenPage onClose={() => setModalVisible(false)}
                                speed={speed}
                                altitude={altitude}
                                maxSpeed={maxSpeed}
                                tripDistance={tripDistance}
                                time={time}
                                stopped={stopped}
                                averageSpeed={averageSpeed}
                                unit={unit}/>
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
