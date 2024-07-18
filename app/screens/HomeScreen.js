import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Arc, Background, Marks, Needle, Progress} from "react-native-cool-speedometer";
import Speedometer from "react-native-cool-speedometer/dist/Speedometer";
import useLocation from '../hooks/useLocation';
import useSettings from "../hooks/useSettings";

const HomeScreen = () => {
    const speed = useLocation();

    const {
        unit, updateUnit,
        maxSpeed, updateMaxSpeed,
        orientationLock, updateOrientationLock,
        showGPSAccuracy, updateShowGPSAccuracy,
        smoothNeedleAnimation, updateSmoothNeedleAnimation,
        temperatureUnit, updateTemperatureUnit,
        autoStartTrip, updateAutoStartTrip,
        appAppearance, updateAppAppearance,
        speedometerSide, updateSpeedometerSide,
        language, updateLanguage,
    } = useSettings();

    return (
        <View style={styles.container}>
            <Speedometer
                value={150}
                max={maxSpeed}
                accentColor='black'
            >
                <Background color='red'/>
                <Arc/>
                <Needle/>
                <Progress/>
                <Marks/>
            </Speedometer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
