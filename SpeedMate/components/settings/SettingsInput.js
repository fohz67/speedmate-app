import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Colors from '../../assets/theme/colors';
import {normalize} from '../../normalize';

const SettingsInput = ({value, func, placeholder}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={func}
                placeholder={placeholder}
                placeholderTextColor={Colors.default.input.placeholder}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: normalize(10),
    },
    input: {
        backgroundColor: Colors.default.input.background,
        borderColor: Colors.default.input.border,
        borderRadius: normalize(10),
        borderStyle: 'solid',
        borderWidth: normalize(1),
        color: Colors.default.input.text,
        fontFamily: 'Universo-Regular',
        fontSize: normalize(14),
        padding: normalize(20),
        shadowColor: Colors.default.app.shadow,
        shadowOpacity: normalize(0.5),
        shadowRadius: normalize(15),
        width: '100%',
    },
});

export default SettingsInput;
