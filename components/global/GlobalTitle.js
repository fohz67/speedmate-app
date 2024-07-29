import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../assets/styles/colors';
import {normalize} from '../../utils/normalizeUtils';

export const GlobalTitle = ({label}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: normalize(10),
        marginTop: normalize(60),
    },
    title: {
        color: Colors.categoryTitle,
        fontFamily: 'Universo-Black',
        fontSize: normalize(20),
        fontWeight: 'bold',
    }
});
