import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from "../../assets/theme/colors";
import normalizeUtils from "../../utils/normalizeUtils"

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
        borderRadius: normalizeUtils(10),
        borderStyle: 'solid',
        borderWidth: normalizeUtils(1),
        marginTop: normalizeUtils(10),
        padding: normalizeUtils(20),
        shadowColor: Colors.default.app.shadow,
        shadowOpacity: normalizeUtils(0.5),
        shadowRadius: normalizeUtils(15),
        width: '48%',
    },
    label: {
        color: Colors.default.input.text,
        fontFamily: 'Universo-Regular',
        fontSize: normalizeUtils(12),
        marginBottom: normalizeUtils(8),
    },
    value: {
        color: Colors.default.input.text,
        fontFamily: 'Universo-Black',
        fontSize: normalizeUtils(20),
        fontWeight: 'bold',
    },
});

export default ProfileStatBox;
