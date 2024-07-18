import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

const MyCustomSwitch = ({label, value, func}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Switch
                onValueChange={func}
                value={value}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
    },
});

export default MyCustomSwitch;