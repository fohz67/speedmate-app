import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import useSettings from '../hooks/useSettings';
import MyCustomButtonsList from "../custom/MyCustomButtonsList";
import MyCustomTitle from "../custom/MyCustomTitle";

const units = ['Km/h', 'MPH', 'Kn'];

const SettingsScreen = () => {
    const {
        unit, setUnit,
        maxSpeed, setMaxSpeed,
        orientationLock, setOrientationLock,
        showGPSAccuracy, setShowGPSAccuracy,
        smoothNeedleAnimation, setSmoothNeedleAnimation,
        temperatureUnit, setTemperatureUnit,
        autoStartTrip, setAutoStartTrip,
        appAppearance, setAppAppearance,
        speedometerSide, setSpeedometerSide,
        language, setLanguage,
    } = useSettings();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.section}>
                <MyCustomTitle label="Speedometer"/>
                <MyCustomButtonsList
                    label="Unit"
                    options={units}
                    selected={unit}
                    func={setUnit}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexGrow: 1,
        padding: 20,
    },
    element: {
        fontSize: 16,
        fontWeight: 'semibold',
    },
    section: {
        width: '100%',
    }
});

export default SettingsScreen;