import Slider from '@react-native-community/slider';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../theme';

const PrettySlider = ({label, value, func, min, max, step}) => {
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
        marginLeft: 5,
        marginTop: 10,
    },
    slider: {
        flex: 1,
    },
    text: {
        color: theme.default.app.text,
        fontSize: 16,
        marginRight: 10,
    },
});

export default PrettySlider;
