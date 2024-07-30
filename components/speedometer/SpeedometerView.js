import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Arc, Progress} from 'react-native-cool-speedometer';
import Speedometer from 'react-native-cool-speedometer/dist/Speedometer';
import {Colors} from '../../assets/styles/colors';
import useUnits from '../../hooks/useUnits';
import {useSettingsContextService} from '../../SettingsContext';
import {normalize} from '../../utils/normalizeUtils';

export const SpeedometerView = ({speed}) => {
    const {
        width,
        height
    } = Dimensions.get('window');

    const speedometerWidth = (width < height ? width : height) - normalize(80);
    const rectangleBias = 1.3;

    const {
        arcWidth,
        speedometerMaxSpeed
    } = useSettingsContextService();

    const units = useUnits();

    return (
        <View style={styles.container}>
            <Speedometer
                value={speed}
                max={speedometerMaxSpeed}
                width={speedometerWidth}
                height={speedometerWidth}
                angle={360}
                accentColor={Colors.speedometerLine}
            >
                <Arc
                    arcWidth={arcWidth}
                    color={Colors.speedometerArc}
                />
                <Progress arcWidth={arcWidth}/>
            </Speedometer>

            <View style={[
                styles.rectangle, {
                    bottom: -speedometerWidth / rectangleBias,
                    height: speedometerWidth,
                    width: speedometerWidth
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
        backgroundColor: Colors.background,
        position: 'absolute',
        transform: [{
            rotate: '45deg'
        }],
    },
    speed: {
        color: Colors.speedometerSpeed,
        fontFamily: 'Universo-Black',
        fontSize: normalize(110),
        position: 'absolute',
    },
    unit: {
        bottom: '23%',
        color: Colors.speedometerUnit,
        fontFamily: 'Universo-Regular',
        fontSize: normalize(27),
        position: 'absolute',
        textTransform: 'uppercase',
    }
});
