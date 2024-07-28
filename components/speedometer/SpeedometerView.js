import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Arc, Progress} from 'react-native-cool-speedometer';
import Speedometer from 'react-native-cool-speedometer/dist/Speedometer';
import Colors from '../../assets/theme/colors';
import useUnits from "../../hooks/useUnits";
import {useSettingsContext} from "../../SettingsContext";
import normalizeUtils from "../../utils/normalizeUtils";

const SpeedometerView = ({speed}) => {
    const width = Dimensions.get('window').width - 80;
    const rectangleBias = 1.3;

    const {
        arcWidth,
        speedometerMaxSpeed
    } = useSettingsContext();

    const units = useUnits();

    return (
        <View style={styles.container}>
            <Speedometer
                value={speed}
                max={speedometerMaxSpeed}
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
                    bottom: -width / rectangleBias,
                    height: width,
                    width: width
                }
            ]}/>

            <Text style={styles.speed}>{speed}</Text>
            <Text style={styles.unit}>{units.speed}</Text>
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
        fontSize: normalizeUtils(100),
        position: 'absolute',
    },
    unit: {
        bottom: '25%',
        color: Colors.default.app.text,
        fontFamily: 'Universo-Thin',
        fontSize: normalizeUtils(27),
        position: 'absolute',
    }
});

export default SpeedometerView;
