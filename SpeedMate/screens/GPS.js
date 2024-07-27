import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SpeedometerPanel from "../components/gps/SpeedometerPanel";
import SpeedometerView from "../components/gps/SpeedometerView";
import useFonts from '../hooks/useFonts';

export default function GPS() {
    const fontsLoaded = useFonts();

    if (!fontsLoaded) {
        return <View><Text>Loading...</Text></View>;
    }

    return (
        <View style={styles.container}>
            <SpeedometerView/>
            <SpeedometerPanel/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});
