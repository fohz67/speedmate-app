import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from "../ThemeContext";

const MyCustomTitle = () => {
    const theme = useTheme();

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