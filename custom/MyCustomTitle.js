import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MyCustomTitle = ({label}) => {
    return (
        <View style={styles.view}>
            <Text style={styles.title}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    view: {
        marginTop: 30,
    }
});

export default MyCustomTitle;