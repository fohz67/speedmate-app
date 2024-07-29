import Slider from '@react-native-community/slider';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../assets/styles/colors';
import {normalize} from '../../utils/normalizeUtils';

const SettingsSlider = ({label, value, func, min, max, step, unit}) => {
    const finalValue = value.toString() + (unit ? unit : '').toString();

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.value}>{finalValue}</Text>
            </View>
            <Slider
                style={styles.slider}
                minimumValue={min}
                maximumValue={max}
                step={step}
                value={value}
                onValueChange={func}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: normalize(-5),
        marginTop: normalize(20),
    },
    label: {
        color: Colors.default.app.text,
        fontFamily: 'Universo-Regular',
        fontSize: normalize(13),
        marginLeft: normalize(5),
        textAlign: 'left',
    },
    slider: {
        width: '100%',
    },
    textContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: normalize(7),
        justifyContent: 'space-between',
    },
    value: {
        color: Colors.default.app.title,
        fontFamily: 'Universo-Bold',
        fontSize: normalize(15),
        marginRight: normalize(5),
        textAlign: 'right',
    },
});

export default SettingsSlider;