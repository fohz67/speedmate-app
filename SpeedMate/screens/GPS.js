import React from 'react';
import {StyleSheet, View} from 'react-native';
import SpeedometerPanel from "../components/gps/SpeedometerPanel";
import SpeedometerView from "../components/gps/SpeedometerView";

export default function GPS() {
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
