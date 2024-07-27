import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Arc, Progress} from 'react-native-cool-speedometer';
import Speedometer from 'react-native-cool-speedometer/dist/Speedometer';
import Colors from '../../assets/theme/colors';
import normalize from "../../normalize";

const SpeedometerView = () => {
    const speed = 67;
    const maxSpeed = 100;
    const unit = 0;
    const units = ["Km/h", "Mph"];
    const width = Dimensions.get('window').width - 80;
    const arcWidth = 5;

    return (
        <View style={styles.container}>
            <Speedometer
                value={speed + 10}
                max={maxSpeed + 20}
                width={width}
                height={width}
                angle={360}
                accentColor={Colors.default.speedometer.line}
            >
                <Arc
                    arcWidth={arcWidth}
                    color={Colors.default.speedometer.arc}
                />
                <Progress arcWidth={arcWidth}/>
            </Speedometer>

            <View style={[
                styles.rectangle, {
                    bottom: -width / 1.3,
                    height: width,
                    width: width
                }
            ]}/>

            <Text style={styles.speed}>{Math.floor(speed)}</Text>
            <Text style={styles.unit}>{units[unit]}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    rectangle: {
        backgroundColor: Colors.default.app.background,
        position: 'absolute',
        transform: [{rotate: '45deg'}],
    },
    speed: {
        color: Colors.default.app.text,
        fontFamily: 'Universo-Black',
        fontSize: normalize(100),
        position: 'absolute',
    },
    unit: {
        bottom: '25%',
        color: Colors.default.app.text,
        fontFamily: 'Universo-Thin',
        fontSize: normalize(27),
        position: 'absolute',
    }
});

export default SpeedometerView;
