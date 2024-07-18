import Slider from '@react-native-community/slider';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useSettings from "../hooks/useSettings";
import useTheme from "../hooks/useTheme";

const MyCustomSlider = ({label, value, func, min, max, step}) => {
    const {appAppearance} = useSettings();
    const theme = useTheme(appAppearance);

    return (
        <View style={styles.container}>
            <Text style={[styles.text, {color: theme.text}]}>{label}: {value}</Text>
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