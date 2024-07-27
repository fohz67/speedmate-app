import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import Colors from '../../assets/theme/colors';
import {normalize} from '../../normalize';

const SettingsSwitch = ({label, value, func}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{label}</Text>
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
        marginLeft: normalize(5),
        marginTop: normalize(10),
    },
    text: {
        color: Colors.default.app.text,
        fontSize: normalize(16),
    },
});

export default SettingsSwitch;
