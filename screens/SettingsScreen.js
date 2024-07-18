import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import useSettings from '../hooks/useSettings';
import MyCustomButtonsList from "../custom/MyCustomButtonsList";

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

    const handleChange = (updateFunc) => (value) => {
        updateFunc(value);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.section}>
                <Text style={styles.heading}>Speedometer</Text>
                <Text style={styles.element}>Unit</Text>
                <MyCustomButtonsList
                    options={units}
                    selectedValue={unit}
                    onSelect={handleChange(setUnit())}
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
        marginTop: 10,
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        padding: 15,
        shadowColor: 'black',
        shadowOpacity: 0.03,
        shadowRadius: 15,
        width: '100%',
    },
    section: {
        marginBottom: 20,
        width: '100%',
    }
});

export default SettingsScreen;