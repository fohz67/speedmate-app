import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../assets/theme/colors';
import {normalizeUtils} from '../../utils/normalizeUtils';

const GlobalTitle = ({label}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: normalizeUtils(60),
        marginBottom: normalizeUtils(10),
    },
    title: {
        color: Colors.default.app.title,
        fontFamily: 'Universo-Black',
        fontSize: normalizeUtils(20),
        fontWeight: 'bold',
    }
});

export default GlobalTitle;
