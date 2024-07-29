import * as ScreenOrientation from 'expo-screen-orientation';
import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {Colors} from '../assets/styles/colors';
import {Sizes} from "../assets/styles/sizes";
import SpeedometerPanel from '../components/speedometer/SpeedometerPanel';
import SpeedometerView from '../components/speedometer/SpeedometerView';
import {useBatteryPercentage, useCurrentTime} from "../hooks/usePhoneData";
import {convertMsToKphOrMph, convertToKmOrFeet, convertToKmOrMiles} from '../utils/convertUtils';
import {normalize} from '../utils/normalizeUtils';
import {formatTime} from '../utils/timerUtils';

export default function FullScreenPage({
                                           onClose,
                                           speed,
                                           altitude,
                                           maxSpeed,
                                           tripDistance,
                                           time,
                                           stopped,
                                           averageSpeed,
                                           unit
                                       }) {
    const [isPortrait, setIsPortrait] = useState(true);

    const currentTime = useCurrentTime();
    const batteryPercentage = useBatteryPercentage();

    const handleLayout = (event) => {
        const {width, height} = event.nativeEvent.layout;

        setIsPortrait(height > width);
    };

    useEffect(() => {
        ScreenOrientation.unlockAsync();
        StatusBar.setHidden(true, 'fade');

        return () => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
            StatusBar.setHidden(false, 'fade');
        };
    }, []);

    return (
        <TouchableWithoutFeedback onPress={onClose}>
            <View style={isPortrait ? styles.portraitContainer : styles.landscapeContainer}
                  onLayout={handleLayout}>
                <View style={styles.topBar}>
                    <Text style={styles.topBarText}>{currentTime}</Text>
                    <Text style={styles.topBarText}>{batteryPercentage}</Text>
                </View>

                <SpeedometerView speed={convertMsToKphOrMph(speed, unit).toFixed(0)}/>

                <SpeedometerPanel
                    time={formatTime(time)}
                    stopped={formatTime(stopped)}
                    altitude={convertToKmOrFeet(altitude, unit).toFixed(0)}
                    averageSpeed={convertMsToKphOrMph(averageSpeed, unit).toFixed(0)}
                    maxSpeed={convertMsToKphOrMph(maxSpeed, unit).toFixed(0)}
                    tripDistance={convertToKmOrMiles(tripDistance, unit).toFixed(2)}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    landscapeContainer: {
        flex: 1,
        paddingTop: normalize(Sizes.fullScreenPage_landscapeContainer_paddingTop),
        paddingRight: normalize(Sizes.fullScreenPage_landscapeContainer_paddingRight),
        paddingLeft: normalize(Sizes.fullScreenPage_landscapeContainer_paddingLeft),
        flexDirection: 'row',
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    portraitContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.background,
        justifyContent: 'center',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        left: normalize(Sizes.fullScreenPage_topBar_left),
        position: 'absolute',
        right: normalize(Sizes.fullScreenPage_topBar_right),
        top: normalize(Sizes.fullScreenPage_topBar_top),
    },
    topBarText: {
        color: Colors.navigationTitle,
        fontFamily: 'Universo-Bold',
        fontSize: normalize(15),
    },
});
