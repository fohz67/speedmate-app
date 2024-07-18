import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import useSettings from "../hooks/useSettings";
import useTheme from "../hooks/useTheme";

const MyCustomInput = ({value, func, placeholder}) => {
    const {appAppearance} = useSettings();
    const theme = useTheme(appAppearance);

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