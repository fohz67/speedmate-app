import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Colors from '../../assets/theme/colors';
import {normalizeUtils} from '../../utils/normalizeUtils';

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
        marginTop: normalizeUtils(10),
    },
    input: {
        backgroundColor: Colors.default.input.background,
        borderColor: Colors.default.input.border,
        borderRadius: normalizeUtils(10),
        borderStyle: 'solid',
        borderWidth: normalizeUtils(1),
        color: Colors.default.input.text,
        fontFamily: 'Universo-Regular',
        fontSize: normalizeUtils(14),
        padding: normalizeUtils(20),
        shadowColor: Colors.default.app.shadow,
        shadowOpacity: normalizeUtils(0.5),
        shadowRadius: normalizeUtils(15),
        width: '100%',
    },
});

export default SettingsInput;
