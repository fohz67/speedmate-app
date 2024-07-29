import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../assets/styles/colors';
import {normalize} from '../../utils/normalizeUtils';

export const GlobalSeparator = () => {
    return (
        <View style={styles.separator}></View>
    );
};

const styles = StyleSheet.create({
    separator: {
        backgroundColor: Colors.separatorBackground,
        borderColor: Colors.separatorBorder,
        borderRadius: normalize(0.5),
        borderWidth: normalize(1),
        marginBottom: normalize(5),
        marginTop: normalize(15),
    }
});
