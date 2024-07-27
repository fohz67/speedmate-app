import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../assets/theme/colors';
import {normalize} from '../../normalize';

const MyCustomTitle = () => {
    return (
        <View style={styles.separator}></View>
    );
};

const styles = StyleSheet.create({
    separator: {
        backgroundColor: Colors.default.app.separator,
        borderColor: Colors.default.app.separator,
        borderWidth: normalize(0.5),
        marginBottom: normalize(5),
        marginTop: normalize(15),
    }
});

export default MyCustomTitle;
