import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../theme';

const PrettyTitle = ({label}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    title: {
        color: theme.default.app.title,
        fontSize: 22,
        fontWeight: 'bold',
    }
});

export default PrettyTitle;