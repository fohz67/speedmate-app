import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const MyCustomInput = ({value, func, placeholder}) => {
    return (
        <View style={styles.view}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={func}
                placeholder={placeholder}
                placeholderTextColor="#c7c7c7"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        fontSize: 16,
        padding: 15,
        shadowColor: 'black',
        shadowOpacity: 0.03,
        shadowRadius: 15,
        width: '100%',
    },
    view: {
        marginTop: 10,
    },
});

export default MyCustomInput;