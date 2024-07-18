import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';

const MyCustomSlider = ({label, value, func, min, max, step}) => {
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
    slider: {
        flex: 1,
    },
    text: {
        fontSize: 16,
        marginRight: 10,
    },
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 5,
        marginTop: 10,
    },
});

export default MyCustomSlider;