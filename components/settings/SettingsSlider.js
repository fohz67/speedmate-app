import Slider from '@react-native-community/slider';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../assets/theme/colors';
import {normalizeUtils} from '../../utils/normalizeUtils';

const SettingsSlider = ({label, value, func, min, max, step}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{label}: {value}</Text>
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
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: normalizeUtils(3),
        marginLeft: normalizeUtils(5),
        marginTop: normalizeUtils(13),
    },
    slider: {
        flex: 1,
    },
    text: {
        color: Colors.default.app.text,
        fontFamily: 'Universo-Regular',
        fontSize: normalizeUtils(14),
        marginRight: normalizeUtils(10),
    },
});

export default SettingsSlider;
