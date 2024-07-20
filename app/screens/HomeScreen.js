import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Arc, Progress} from "react-native-cool-speedometer";
import Speedometer from "react-native-cool-speedometer/dist/Speedometer";
import useLocation from '../hooks/useLocation';
import useSettings from "../hooks/useSettings";
import theme from '../theme';

const HomeScreen = () => {
    const speed = useLocation();
    const {maxSpeed} = useSettings();

    return (
        <View style={styles.container}>
            <Speedometer
                value={speed + 15}
                max={maxSpeed + 30}
                angle={360}
                lineCap="round"
                accentColor={theme.default.speedometer.line}
            >
                <Arc
                    arcWidth={40}
                    color={theme.default.speedometer.arc}
                />
                <Progress arcWidth={40}/>
            </Speedometer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});

export default HomeScreen;
