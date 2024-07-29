import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../assets/styles/colors';
import {normalize} from '../../utils/normalizeUtils';

const GlobalSeparator = () => {
    return (
        <View style={styles.separator}></View>
    );
};

const styles = StyleSheet.create({
    separator: {
        backgroundColor: Colors.default.app.separator,
        borderColor: Colors.default.app.separator,
        borderWidth: normalize(1),
        borderRadius: normalize(0.5),
        marginBottom: normalize(5),
        marginTop: normalize(15),
    }
});

export default GlobalSeparator;
