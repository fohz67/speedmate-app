import React from 'react';
import {StyleSheet, View} from 'react-native';
import SpeedometerPanel from "../components/speedometer/SpeedometerPanel";
import SpeedometerView from "../components/speedometer/SpeedometerView";
import {convertAltitude, convertDistance, convertSpeed} from "../convert";
import useGPS from "../hooks/useGPS";
import {useSettingsContext} from "../SettingsContext";
import {formatTime} from "../timeUtils";

export default function GPSScreen() {
    const {
        speed,
        altitude,
        time,
        stopped,
        averageSpeed,
        maxSpeed,
        tripDistance
    } = useGPS();

    const {unit} = useSettingsContext();

    return (
        <View style={styles.container}>
            <SpeedometerView speed={convertSpeed(speed, unit).toFixed(0)}/>
            <SpeedometerPanel time={formatTime(time)}
                              stopped={formatTime(stopped)}
                              altitude={convertAltitude(altitude, unit).toFixed(0)}
                              averageSpeed={convertSpeed(averageSpeed, unit).toFixed(2)}
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
