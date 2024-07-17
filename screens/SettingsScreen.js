import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import useSettings from "../hooks/useSettings";

const SettingsScreen = () => {
    const {isKm, setIsKm, maxSpeed, setMaxSpeed} = useSettings();

    return (
        <View style={styles.container}>
            <View style={styles.setting}>
                <Text style={styles.text}>Unités: {isKm ? 'Km/h' : 'Miles/h'}</Text>
                <Switch
                    value={isKm}
                    onValueChange={setIsKm}
                />
            </View>
            <View style={styles.setting}>
                <Text style={styles.text}>Max du compteur: {maxSpeed}</Text>
                <Switch
                    value={maxSpeed === 100}
                    onValueChange={(value) => setMaxSpeed(value ? 100 : 170)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    setting: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginRight: 10,
    },
});

export default SettingsScreen;