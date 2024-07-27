import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../assets/theme/colors';
import normalize from "../../normalize";

const SpeedometerStat = ({label, unit, value, little}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.valueContainer}>
                <Text style={little ? styles.littleValue : styles.value}>{value}</Text>
                <Text style={styles.unit}>{unit}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: normalize(5),
    },
    label: {
        color: Colors.default.stats.text,
        fontFamily: 'Universo-Regular',
        fontSize: normalize(18),
        textTransform: 'uppercase',
    },
    littleValue: {
        color: Colors.default.stats.value,
        fontFamily: 'Universo-Regular',
        fontSize: normalize(25),
        marginBottom: normalize(10),
    },
    unit: {
        color: Colors.default.stats.label,
        fontFamily: 'Universo-Regular',
        fontSize: normalize(20),
        marginLeft: normalize(5),
    },
    value: {
        color: Colors.default.stats.value,
        fontFamily: 'Universo-Black',
        fontSize: normalize(35),
        marginBottom: normalize(10),
    },
    valueContainer: {
        alignItems: 'baseline',
        flexDirection: 'row',
    },
});

export default SpeedometerStat;
