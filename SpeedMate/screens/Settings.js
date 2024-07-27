import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useFonts from "../hooks/useFonts";

export default function Settings() {
    const fontsLoaded = useFonts();

    if (!fontsLoaded) {
        return <View><Text>Loading...</Text></View>;
    }

    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
