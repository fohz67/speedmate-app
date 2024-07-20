import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import theme from '../theme';

const PrettyInput = ({value, func, placeholder}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={func}
                placeholder={placeholder}
                placeholderTextColor={theme.default.input.placeholder}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    input: {
        backgroundColor: theme.default.input.background,
        borderColor: theme.default.input.border,
        borderStyle: 'solid',
        borderRadius: 15,
        borderWidth: 1,
        color: theme.default.input.text,
        fontSize: 17,
        padding: 20,
        shadowColor: theme.default.app.shadow,
        shadowOpacity: 0.5,
        shadowRadius: 15,
        width: '100%',
    },
});

export default PrettyInput;
