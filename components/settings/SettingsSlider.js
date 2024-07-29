import Slider from '@react-native-community/slider';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../assets/theme/colors';
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
        marginTop: normalize(20),
        marginBottom: normalize(-5),
    },
    label: {
        color: Colors.default.app.text,
        fontFamily: 'Universo-Regular',
        fontSize: normalize(14),
        textAlign: 'left',
    },
    slider: {
        width: '100%',
    },
    textContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: normalize(5),
    },
    value: {
        color: Colors.default.app.title,
        fontFamily: 'Universo-Black',
        fontSize: normalize(20),
        textAlign: 'right',
    },
});

export default SettingsSlider;