import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import useSettings from "../hooks/useSettings";
import useTheme from "../hooks/useTheme";

const MyCustomSwitch = ({label, value, func}) => {
    const {appAppearance} = useSettings();
    const theme = useTheme(appAppearance);

    return (
        <View style={styles.container}>
            <Text style={[styles.text, {color: theme.text}]}>{label}</Text>
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
        fontSize: 16,
    },
});

export default MyCustomSwitch;