import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {normalize} from "react-native-elements";
import Colors from "../assets/theme/colors";
import SpeedometerPanel from "../components/speedometer/SpeedometerPanel";
import SpeedometerView from "../components/speedometer/SpeedometerView";
import useGPS from "../hooks/useGPS";
import useTimer from "../hooks/useTimer";
import {useSettingsContext} from "../SettingsContext";
import {convertAltitude, convertDistance, convertSpeed} from "../utils/convertUtils";
import {formatTime} from "../utils/timerUtils";

export default function FullScreenPage({onClose}) {
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
            <TouchableOpacity style={styles.closeButton}
                              onPress={onClose}>
                <Image source={require('../assets/ic-cross.png')}
                       style={styles.closeIcon}
                       tintColor={Colors.default.app.text}
                />
            </TouchableOpacity>
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
        backgroundColor: Colors.default.app.background,
        flex: 1,
        justifyContent: 'center',
    },
    closeButton: {
        padding: normalize(10),
        position: 'absolute',
        left: normalize(20),
        top: normalize(60),
        zIndex: 1,
    },
    closeIcon: {
        height: normalize(15),
        width: normalize(15),
    },
});
