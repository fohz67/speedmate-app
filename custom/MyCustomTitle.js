import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MyCustomTitle = ({label}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    }
});

export default MyCustomTitle;