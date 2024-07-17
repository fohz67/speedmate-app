import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useLocation from '../hooks/useLocation';

const HomeScreen = () => {
    const speed = useLocation();

    return (
        <View style={styles.container}>
            <Text style={styles.speedText}>{(speed * 3.6).toFixed(2)} km/h</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    speedText: {
        fontSize: 48,
        fontWeight: 'bold',
    },
});

export default HomeScreen;