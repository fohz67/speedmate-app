import * as ScreenOrientation from 'expo-screen-orientation';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Colors from '../assets/theme/colors';
import SpeedometerPanel from '../components/speedometer/SpeedometerPanel';
import SpeedometerView from '../components/speedometer/SpeedometerView';
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

    const handleLayout = (event) => {
        const {width, height} = event.nativeEvent.layout;

        setIsPortrait(height > width);
    };

    useEffect(() => {
        ScreenOrientation.unlockAsync();

        return () => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
        };
    }, []);

    return (
        <View style={isPortrait ? styles.portraitContainer : styles.landscapeContainer}
              onLayout={handleLayout}>
            <TouchableOpacity style={styles.closeButton}
                              onPress={onClose}>
                <Image source={require('../assets/ic-cross.png')}
                       style={styles.closeIcon}
                       tintColor={Colors.default.app.text}/>
            </TouchableOpacity>

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
    );
}

const styles = StyleSheet.create({
    closeButton: {
        left: normalize(20),
        padding: normalize(10),
        position: 'absolute',
        top: normalize(60),
    },
    closeIcon: {
        height: normalize(15),
        width: normalize(15),
    },
    landscapeContainer: {
        flex: 1,
        paddingRight: normalize(180),
        paddingLeft: normalize(250),
        flexDirection: 'row',
        backgroundColor: Colors.default.app.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    portraitContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.default.app.background,
        justifyContent: 'center',
    },
});
