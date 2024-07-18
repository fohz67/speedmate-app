import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const MyCustomInput = ({value, func, placeholder}) => {
    const theme = useTheme();

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, {backgroundColor: theme.inputBackground}]}
                value={value}
                onChangeText={func}
                placeholder={placeholder}
                placeholderTextColor="#c7c7c7"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    input: {
        borderRadius: 10,
        fontSize: 16,
        padding: 15,
        shadowColor: 'black',
        shadowOpacity: 0.03,
        shadowRadius: 15,
        width: '100%',
    },
});

export default MyCustomInput;