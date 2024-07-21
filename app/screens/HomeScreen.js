import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Arc, Progress} from "react-native-cool-speedometer";
import Speedometer from "react-native-cool-speedometer/dist/Speedometer";
import useLocation from '../hooks/useLocation';
import useSettings from "../hooks/useSettings";
import theme from '../theme';

const HomeScreen = () => {
    let speed = useLocation();
    const {maxSpeed} = useSettings();
    const speedometerWidth = Dimensions.get('window').width - 50;
    const lineWidth = 50;

    return (
        <View style={styles.container}>
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
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    rectangle: {
        backgroundColor: theme.default.app.background,
        position: 'absolute',
        transform: [{rotate: '45deg'}],
    },
    speedometerContainer: {
        top: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
