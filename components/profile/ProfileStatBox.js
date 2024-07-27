import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from "../../assets/theme/colors";
import normalize from "../../utils/normalize"

const ProfileStatBox = ({label, value, unit}) => {
    return (
        <View style={styles.box}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}{unit ? unit + " " : ""}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        backgroundColor: Colors.default.input.background,
        borderColor: Colors.default.input.border,
        borderRadius: normalize(10),
        borderStyle: 'solid',
        borderWidth: normalize(1),
        marginTop: normalize(10),
        padding: normalize(20),
        shadowColor: Colors.default.app.shadow,
        shadowOpacity: normalize(0.5),
        shadowRadius: normalize(15),
        width: '48%',
    },
    label: {
        color: Colors.default.input.text,
        fontFamily: 'Universo-Regular',
        fontSize: normalize(12),
        marginBottom: normalize(8),
    },
    value: {
        color: Colors.default.input.text,
        fontFamily: 'Universo-Black',
        fontSize: normalize(20),
        fontWeight: 'bold',
    },
});

export default ProfileStatBox;
