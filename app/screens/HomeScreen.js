import React from 'react';
import {useTranslation} from "react-i18next";
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Arc, Progress} from 'react-native-cool-speedometer';
import Speedometer from 'react-native-cool-speedometer/dist/Speedometer';
import useLocation from '../hooks/useLocation';
import useSettings from "../hooks/useSettings";
import useUnits from '../hooks/useUnits';
import theme from '../theme';

const HomeScreen = () => {
    const speedometerWidth = Dimensions.get('window').width - 80;
    const lineWidth = 5;

    const {t} = useTranslation();
    const {maxSpeedometerValue} = useSettings();
    const units = useUnits();

    const {
        speed,
        altitude,
        distance,
        maxSpeed,
        averageSpeed,
        timeRide,
        timeAtZero
    } = useLocation();

    return (
        <View style={styles.container}>
            <View style={styles.speedometerContainer}>
                <Speedometer
                    value={speed + 10}
                    max={maxSpeedometerValue + 20}
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
                <Text style={styles.speedometerUnit}>{units.speed}</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.infoColumn}>
                    <Text style={styles.infoText}>{t('avgSpeed')}</Text>
                    <View style={styles.infoLabelContainer}>
                        <Text style={styles.infoValue}>{Math.floor(averageSpeed)}</Text>
                        <Text style={styles.infoLabel}>{units.speed}</Text>
                    </View>

                    <Text style={styles.infoText}>{t('distance')}</Text>
                    <View style={styles.infoLabelContainer}>
                        <Text style={styles.infoValue}>{distance.toFixed(2)}</Text>
                        <Text style={styles.infoLabel}>{units.distance}</Text>
                    </View>

                    <Text style={styles.infoText}>{t('pauseTime')}</Text>
                    <View style={styles.infoLabelContainer}>
                        <Text style={styles.infoValueTime}>{timeAtZero}</Text>
                    </View>
                </View>
                <View style={styles.infoColumn}>
                    <Text style={styles.infoText}>{t('maxSpeedC')}</Text>
                    <View style={styles.infoLabelContainer}>
                        <Text style={styles.infoValue}>{Math.floor(maxSpeed)}</Text>
                        <Text style={styles.infoLabel}>{units.speed}</Text>
                    </View>

                    <Text style={styles.infoText}>{t('altitude')}</Text>
                    <View style={styles.infoLabelContainer}>
                        <Text style={styles.infoValue}>{Math.floor(altitude)}</Text>
                        <Text style={styles.infoLabel}>{units.altitude}</Text>
                    </View>

                    <Text style={styles.infoText}>{t('timeRide')}</Text>
                    <View style={styles.infoLabelContainer}>
                        <Text style={styles.infoValueTime}>{timeRide}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    infoColumn: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-start',
    },
    infoContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginTop: 40,
    },
    infoLabel: {
        color: theme.default.stats.label,
        fontFamily: 'Universo-Regular',
        fontSize: 20,
        marginLeft: 5,
    },
    infoLabelContainer: {
        alignItems: 'baseline',
        flexDirection: 'row',
        marginVertical: 5,
    },
    infoText: {
        color: theme.default.stats.text,
        fontFamily: 'Universo-Regular',
        fontSize: 18,
        marginVertical: 5,
        textTransform: 'uppercase',
    },
    infoValue: {
        color: theme.default.stats.value,
        fontFamily: 'Universo-Black',
        fontSize: 35,
        marginBottom: 20,
    },
    infoValueTime: {
        color: theme.default.stats.value,
        fontFamily: 'Universo-Regular',
        fontSize: 25,
        marginBottom: 10,
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
        top: 30,
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
