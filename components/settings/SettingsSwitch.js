import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import Colors from '../../assets/theme/colors';
import {normalizeUtils} from '../../utils/normalizeUtils';

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
        marginLeft: normalizeUtils(5),
        marginTop: normalizeUtils(10),
    },
    text: {
        color: Colors.default.app.text,
        fontSize: normalizeUtils(16),
    },
});

export default SettingsSwitch;
