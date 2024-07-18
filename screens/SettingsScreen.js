import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import useSettings from '../hooks/useSettings';
import MyCustomTitle from "../custom/MyCustomTitle";
import MyCustomSlider from "../custom/MyCustomSlider";
import MyCustomSwitch from "../custom/MyCustomSwitch";
import MyCustomDropdownList from "../custom/MyCustomDropdownList";
import MyCustomSeparator from "../custom/MyCustomSeparator";

const units = ['Km/h', 'MPH', 'Kn'];
const orientationLocks = ['Auto', 'Vertical', 'Horizontal'];
const temperatureUnits = ['°C', '°F'];
const appAppearances = ['Auto', 'Light', 'Night'];
const speedometerSides = ['Left', 'Right'];
const languages = ['Français', 'English', 'German'];

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
                <MyCustomDropdownList
                    label="Unit"
                    options={units}
                    selected={unit}
                    func={setUnit}
                />
                <MyCustomSeparator/>
                <MyCustomSlider
                    label="Max Speed"
                    value={maxSpeed}
                    func={setMaxSpeed}
                    min={50}
                    max={450}
                    step={5}
                />
                <MyCustomSeparator/>
                <MyCustomSwitch
                    label="Show GPS Accuracy"
                    value={showGPSAccuracy}
                    func={setShowGPSAccuracy}
                />
                <MyCustomSeparator/>
                <MyCustomSwitch
                    label="Smooth Needle Animation"
                    value={smoothNeedleAnimation}
                    func={setSmoothNeedleAnimation}
                />
                <MyCustomSeparator/>
                <MyCustomDropdownList
                    label="Temperature Unit"
                    options={temperatureUnits}
                    selected={temperatureUnit}
                    func={setTemperatureUnit}
                />
                <MyCustomSeparator/>
                <MyCustomSwitch
                    label="Auto Start Trip"
                    value={autoStartTrip}
                    func={setAutoStartTrip}
                />
                <MyCustomSeparator/>
                <MyCustomDropdownList
                    label="Speedometer Side"
                    options={speedometerSides}
                    selected={speedometerSide}
                    func={setSpeedometerSide}
                />
            </View>

            <View style={styles.section}>
                <MyCustomTitle label="Application"/>
                <MyCustomDropdownList
                    label="Orientation Lock"
                    options={orientationLocks}
                    selected={orientationLock}
                    func={setOrientationLock}
                />
                <MyCustomSeparator/>
                <MyCustomDropdownList
                    label="App Appearance"
                    options={appAppearances}
                    selected={appAppearance}
                    func={setAppAppearance}
                />
                <MyCustomSeparator/>
                <MyCustomDropdownList
                    label="Language"
                    options={languages}
                    selected={language}
                    func={setLanguage}
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