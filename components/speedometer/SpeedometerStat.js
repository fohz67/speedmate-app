import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../assets/theme/colors';
import normalizeUtils from "../../utils/normalizeUtils";

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
        marginVertical: normalizeUtils(15)
    },
    label: {
        color: Colors.default.stats.text,
        fontFamily: 'Universo-Regular',
        fontSize: normalizeUtils(18),
        marginBottom: normalizeUtils(10),
        textTransform: 'uppercase',
    },
    littleValue: {
        color: Colors.default.stats.value,
        fontFamily: 'Universo-Regular',
        fontSize: normalizeUtils(25),
    },
    unit: {
        color: Colors.default.stats.label,
        fontFamily: 'Universo-Regular',
        fontSize: normalizeUtils(20),
        marginLeft: normalizeUtils(5),
        textTransform: 'capitalize',
    },
    value: {
        color: Colors.default.stats.value,
        fontFamily: 'Universo-Black',
        fontSize: normalizeUtils(30),
    },
    valueContainer: {
        alignItems: 'baseline',
        flexDirection: 'row',
    },
});

export default SpeedometerStat;
