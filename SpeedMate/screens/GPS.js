import React from 'react';
import {StyleSheet, View} from 'react-native';
import SpeedometerPanel from "../components/gps/SpeedometerPanel";
import SpeedometerView from "../components/gps/SpeedometerView";
import useGPS from "../hooks/useGPS";

export default function GPS() {
    const {
        speed,
        altitude,
        time,
        stopped,
    } = useGPS();

    return (
        <View style={styles.container}>
            <SpeedometerView speed={speed}/>
            <SpeedometerPanel time={time}
                              stopped={stopped}
                              altitude={altitude}/>
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
