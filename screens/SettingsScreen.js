import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import useSettings from '../hooks/useSettings';
import MyCustomButtonsList from "../custom/MyCustomButtonsList";
import MyCustomTitle from "../custom/MyCustomTitle";
import MyCustomSlider from "../custom/MyCustomSlider";
import MyCustomSwitch from "../custom/MyCustomSwitch";

const units = ['Km/h', 'MPH', 'Kn'];
const orientationLocks = ['Auto', 'Vertical', 'Horizontal'];

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
                <MyCustomSlider
                    label="Max Speed"
                    value={maxSpeed}
                    func={setMaxSpeed}
                    min={50}
                    max={450}
                    step={15}
                />
                <MyCustomButtonsList
                    label="Orientation Lock"
                    options={orientationLocks}
                    selected={orientationLock}
                    func={setOrientationLock}
                />
                <MyCustomSwitch
                    label="Show GPS Accuracy"
                    value={showGPSAccuracy}
                    func={setShowGPSAccuracy}
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