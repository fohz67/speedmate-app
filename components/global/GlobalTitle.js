import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../assets/styles/colors';
import {normalize} from '../../utils/normalizeUtils';

const GlobalTitle = ({label}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: normalize(60),
        marginBottom: normalize(10),
    },
    title: {
        color: Colors.categoryTitle,
        fontFamily: 'Universo-Black',
        fontSize: normalize(20),
        fontWeight: 'bold',
    }
});

export default GlobalTitle;
