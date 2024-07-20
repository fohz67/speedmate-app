import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import theme from '../theme';

const PrettySwitch = ({label, value, func}) => {

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
        marginLeft: 5,
        marginTop: 10,
    },
    text: {
        color: theme.default.app.text,
        fontSize: 16,
    },
});

export default PrettySwitch;
