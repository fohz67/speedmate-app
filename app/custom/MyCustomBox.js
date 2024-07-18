import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MyCustomBox = ({label, value, unit}) => {
    const theme = useTheme();

    return (
        <View style={[styles.box, {backgroundColor: theme.inputBackground}]}>
            <Text style={[styles.label, {color: theme.text}]}>{label}</Text>
            <Text style={[styles.value, {color: theme.text}]}>{value}{unit ? unit + ' ' : ''}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 10,
        padding: 20,
        shadowColor: 'black',
        shadowOpacity: 0.03,
        shadowRadius: 15,
        width: '48%',
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
    },
    value: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default MyCustomBox;