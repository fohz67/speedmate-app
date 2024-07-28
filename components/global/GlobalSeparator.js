import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../assets/theme/colors';
import {normalizeUtils} from '../../utils/normalizeUtils';

const MyCustomTitle = () => {
    return (
        <View style={styles.separator}></View>
    );
};

const styles = StyleSheet.create({
    separator: {
        backgroundColor: Colors.default.app.separator,
        borderColor: Colors.default.app.separator,
        borderWidth: normalizeUtils(1),
        borderRadius: normalizeUtils(0.5),
        marginBottom: normalizeUtils(5),
        marginTop: normalizeUtils(15),
    }
});

export default MyCustomTitle;
