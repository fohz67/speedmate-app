import React, {useEffect, useState} from 'react';
import {LayoutChangeEvent, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Orientation, {OrientationType} from 'react-native-orientation-locker';
import {__Colors} from "../../assets/misc/colors.tsx";
import {__Fonts} from "../../assets/misc/fonts.tsx";
import {__Sizes} from "../../assets/misc/sizes.tsx";
import {SpeedometerArc} from '../components/speedometer/SpeedometerArc.tsx';
import {SpeedometerDashboard} from '../components/speedometer/SpeedometerDashboard.tsx';
import {useBatteryPercentage, useCurrentTime} from "../hooks/useDevice.tsx";
import {convertMsToKphOrMph, convertToKmOrFeet, convertToKmOrMiles} from "../utilitaries/convertor.tsx";
import {DimensionsType, normalize} from "../utilitaries/normalize.tsx";
import {formatTimer} from "../utilitaries/time.tsx";

interface FullScreenPageProps {
    altitude: number;
    averageSpeed: number;
    distance: number;
    maxSpeed: number;
    onClose: () => void;
    speed: number;
    stopped: number;
    time: number;
    unit: number;
}

export const GPSFullScreen: React.FC<FullScreenPageProps> = (
    {
        altitude,
        averageSpeed,
        distance,
        maxSpeed,
        speed,
        stopped,
        time,
        unit,
        onClose,
    }: FullScreenPageProps
) => {
    const currentTime: string = useCurrentTime() || '';
    const batteryPercentage: string = useBatteryPercentage() || '';

    const [isPortrait, setIsPortrait] = useState(true);
    const [landscapeDirection, setLandscapeDirection] = useState<'left' | 'right' | null>(null);

    const handleLayout = (event: LayoutChangeEvent): void => {
        const {width, height}: DimensionsType = event.nativeEvent.layout;
        setIsPortrait(height > width);
    };

    useEffect(() => {
        Orientation.unlockAllOrientations();
        StatusBar.setHidden(true, 'fade');

        const handleOrientationChange = (orientation: OrientationType): void => {
            if (orientation === 'LANDSCAPE-LEFT') {
                setLandscapeDirection('left');
            } else if (orientation === 'LANDSCAPE-RIGHT') {
                setLandscapeDirection('right');
            } else {
                setLandscapeDirection(null);
            }
        };

        Orientation.addOrientationListener(handleOrientationChange);

        return (): void => {
            Orientation.lockToPortrait();
            StatusBar.setHidden(false, 'fade');
            Orientation.removeOrientationListener(handleOrientationChange);
        };
    }, []);

    return (
        <TouchableWithoutFeedback onPress={onClose}>
            <View
                style={[
                    isPortrait ? styles.portraitContainer : styles.landscapeContainer,
                    !isPortrait && landscapeDirection === 'left' ? styles.landscapeLeftContainer : null,
                    !isPortrait && landscapeDirection === 'right' ? styles.landscapeRightContainer : null,
                ]}
                onLayout={handleLayout}
            >
                <View style={styles.topBar}>
                    <Text style={styles.topBarText}>{currentTime}</Text>
                    <Text style={styles.topBarText}>{batteryPercentage}</Text>
                </View>

                <SpeedometerArc speed={parseInt(convertMsToKphOrMph(speed, unit).toFixed(0), 10)}/>

                <SpeedometerDashboard
                    altitude={convertToKmOrFeet(altitude, unit).toFixed(0)}
                    averageSpeed={convertMsToKphOrMph(averageSpeed, unit).toFixed(0)}
                    distance={convertToKmOrMiles(distance, unit).toFixed(2)}
                    maxSpeed={convertMsToKphOrMph(maxSpeed, unit).toFixed(0)}
                    stopped={formatTimer(stopped)}
                    time={formatTimer(time)}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles: any = StyleSheet.create({
    landscapeLeftContainer: {
        paddingLeft: normalize(__Sizes.fullScreenPage_landscapeContainer_paddingLeft_Left),
        paddingRight: normalize(__Sizes.fullScreenPage_landscapeContainer_paddingRight_Left),
    },
    landscapeRightContainer: {
        paddingLeft: normalize(__Sizes.fullScreenPage_landscapeContainer_paddingRight_Right),
        paddingRight: normalize(__Sizes.fullScreenPage_landscapeContainer_paddingLeft_Right),
    },
    landscapeContainer: {
        alignItems: 'center',
        backgroundColor: __Colors.background,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: normalize(__Sizes.fullScreenPage_landscapeContainer_paddingTop),
    },
    portraitContainer: {
        alignItems: 'center',
        backgroundColor: __Colors.background,
        flex: 1,
        justifyContent: 'center',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        left: normalize(__Sizes.fullScreenPage_topBar_left),
        position: 'absolute',
        right: normalize(__Sizes.fullScreenPage_topBar_right),
        top: normalize(__Sizes.fullScreenPage_topBar_top),
    },
    topBarText: {
        color: __Colors.navigationTitle,
        fontFamily: __Fonts.bold,
        fontSize: normalize(15),
    },
});
