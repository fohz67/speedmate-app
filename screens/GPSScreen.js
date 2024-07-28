import React from 'react';
import {StyleSheet, View} from 'react-native';
import SpeedometerPanel from "../components/speedometer/SpeedometerPanel";
import SpeedometerView from "../components/speedometer/SpeedometerView";
import useGPS from "../hooks/useGPS";
import useTimer from "../hooks/useTimer";
import {useSettingsContext} from "../SettingsContext";
import {convertAltitude, convertDistance, convertSpeed} from "../utils/convertUtils";
import {formatTime} from "../utils/timerUtils";

export default function GPSScreen() {
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
            <SpeedometerView speed={convertSpeed(speed, unit).toFixed(0)}/>
            <SpeedometerPanel time={formatTime(time)}
                              stopped={formatTime(stopped)}
                              altitude={convertAltitude(altitude, unit).toFixed(0)}
                              averageSpeed={convertSpeed(averageSpeed, unit).toFixed(0)}
                              maxSpeed={convertSpeed(maxSpeed, unit).toFixed(0)}
                              tripDistance={convertDistance(tripDistance, unit).toFixed(2)}/>
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
