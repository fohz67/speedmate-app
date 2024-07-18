import React from 'react';
import {StyleSheet, View} from 'react-native';
import useSettings from "../hooks/useSettings";
import useTheme from "../hooks/useTheme";

const MyCustomTitle = () => {
    const {appAppearance} = useSettings();
    const theme = useTheme(appAppearance);

    return (
        <View style={[styles.separator, {backgroundColor: theme.separator, borderColor: theme.separator}]}></View>
    );
};

const styles = StyleSheet.create({
    separator: {
        marginTop: 15,
        marginBottom: 5,
        borderWidth: 0.5,
    }
});

export default MyCustomTitle;