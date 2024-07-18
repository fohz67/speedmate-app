import React from 'react';
import {StyleSheet, View} from 'react-native';

const MyCustomTitle = () => {
    return (
        <View style={styles.container}></View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginBottom: 5,
        borderWidth: 0.5,
        backgroundColor: '#d9d9d9',
        borderColor: '#d9d9d9',
    }
});

export default MyCustomTitle;