import React from 'react';
import {StyleSheet, View} from 'react-native';
import theme from '../theme';

const MyCustomTitle = () => {

    return (
        <View style={styles.separator}></View>
    );
};

const styles = StyleSheet.create({
    separator: {
        backgroundColor: theme.default.app.separator.color,
        borderColor: theme.default.app.separator,
        borderWidth: 0.5,
        marginBottom: 5,
        marginTop: 15,
    }
});

export default MyCustomTitle;