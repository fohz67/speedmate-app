import Slider from '@react-native-community/slider';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Arc, Progress} from "react-native-cool-speedometer";
import Speedometer from "react-native-cool-speedometer/dist/Speedometer";
import useLocation from "../hooks/useLocation";
import {useOptions} from '../hooks/useOptions';
import useSettings from "../hooks/useSettings";
import theme from '../theme';

const HomeScreen = () => {
    const speedometerWidth = Dimensions.get('window').width - 80;
    const lineWidth = 5;

    const options = useOptions();

    const {
        speed,
        altitude,
        distance,
        maxSpeed: rideMaxSpeed,
        averageSpeed,
        timeRide,
        timeAtZero,
        updateSpeed,
    } = useLocation();

    const {
        unit,
        maxSpeed
    } = useSettings();

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <View style={styles.infoColumn}>
                    <Text style={styles.infoText}>Average Speed: {averageSpeed.toFixed(1)} {options.units[unit]}</Text>
                    <Text style={styles.infoText}>Max Speed: {rideMaxSpeed.toFixed(1)} {options.units[unit]}</Text>
                    <Text style={styles.infoText}>Distance: {distance.toFixed(2)} km</Text>
                </View>
                <View style={styles.infoColumn}>
                    <Text style={styles.infoText}>Altitude: {altitude.toFixed(1)} m</Text>
                    <Text style={styles.infoText}>Time Ride: {timeRide} min</Text>
                    <Text style={styles.infoText}>Time at 0 km/h: {timeAtZero} min</Text>
                </View>
            </View>
            <View style={styles.speedometerContainer}>
                <Speedometer
                    value={speed + 10}
                    max={maxSpeed + 20}
                    width={speedometerWidth}
                    height={speedometerWidth}
                    angle={360}
                    accentColor={theme.default.speedometer.line}
                >
                    <Arc
                        arcWidth={lineWidth}
                        color={theme.default.speedometer.arc}
                    />
                    <Progress arcWidth={lineWidth}/>
                </Speedometer>
                <View style={[
                    styles.rectangle, {
                        bottom: -speedometerWidth / 1.3,
                        height: speedometerWidth,
                        width: speedometerWidth
                    }
                ]}/>
                <Text style={styles.speedometerSpeed}>{Math.floor(speed)}</Text>
                <Text style={styles.speedometerUnit}>{options.units[unit]}</Text>
            </View>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={maxSpeed + 20}
                step={1}
                value={speed}
                onValueChange={value => updateSpeed(value)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        width: '80%',
    },
    infoColumn: {
        flex: 1,
    },
    infoText: {
        color: theme.default.app.text,
        fontSize: 16,
        marginVertical: 5,
    },
    rectangle: {
        backgroundColor: theme.default.app.background,
        position: 'absolute',
        transform: [{rotate: '45deg'}],
    },
    slider: {
        marginTop: 20,
        width: Dimensions.get('window').width - 50,
    },
    speedometerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: 50,
    },
    speedometerSpeed: {
        color: theme.default.app.text,
        fontFamily: 'Universo-Black',
        fontSize: 100,
        position: 'absolute',
    },
    speedometerUnit: {
        bottom: '25%',
        color: theme.default.app.text,
        fontFamily: 'Universo-Thin',
        fontSize: 27,
        position: 'absolute',
    }
});

export default HomeScreen;
