import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from "../theme";

const PrettyBox = ({label, value, unit}) => {

    return (
        <View style={styles.box}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}{unit ? unit + ' ' : ''}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        backgroundColor: theme.default.input.background,
        borderColor: theme.default.input.border,
        borderRadius: 20,
        borderStyle: 'solid',
        borderWidth: 1,
        marginTop: 10,
        padding: 20,
        shadowColor: theme.default.app.shadow,
        shadowOpacity: 0.5,
        shadowRadius: 15,
        width: '48%',
    },
    label: {
        color: theme.default.input.text,
        fontSize: 15,
        marginBottom: 5,
    },
    value: {
        color: theme.default.input.text,
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default PrettyBox;