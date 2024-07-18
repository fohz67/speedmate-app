import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from "../ThemeContext";

const MyCustomTitle = ({label}) => {
    const theme = useTheme();

    return (
        <View style={styles.container}>
            <Text style={[styles.title, {color: theme.title}]}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    }
});

export default MyCustomTitle;