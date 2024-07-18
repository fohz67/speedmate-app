import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';

const MyCustomSlider = ({value, onValueChange, label, min, max, step}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.sliderContainer}>
                <Text style={styles.value}>{value}</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={min}
                    maximumValue={max}
                    step={step}
                    value={value}
                    onValueChange={onValueChange}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        marginBottom: 5,
        marginTop: 5,
    },
    slider: {
        width: '90%',
    },
    sliderContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,
        marginHorizontal: 5,
    },
    value: {
        fontSize: 16,
    },
});

export default MyCustomSlider;