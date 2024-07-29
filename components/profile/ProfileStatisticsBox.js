import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../assets/styles/colors';
import {normalize} from '../../utils/normalizeUtils'

export const ProfileStatisticsBox = (
    {
        label,
        value,
        unit,
        onPress
    }
) => {
    return (
        <TouchableOpacity style={styles.box}
                          onPress={onPress}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}{unit ? unit + ' ' : ''}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        backgroundColor: Colors.inputBackground,
        borderColor: Colors.inputBorder,
        borderRadius: normalize(10),
        borderStyle: 'solid',
        borderWidth: normalize(1),
        marginTop: normalize(10),
        padding: normalize(20),
        shadowColor: Colors.shadow,
        shadowOpacity: normalize(0.5),
        shadowRadius: normalize(15),
        width: '48%',
    },
    label: {
        color: Colors.inputText,
        fontFamily: 'Universo-Regular',
        fontSize: normalize(12),
        marginBottom: normalize(8),
    },
    value: {
        color: Colors.inputText,
        fontFamily: 'Universo-Black',
        fontSize: normalize(18),
        fontWeight: 'bold',
    },
});
