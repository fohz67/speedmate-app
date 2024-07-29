import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors} from '../../assets/styles/colors';
import {normalize} from '../../utils/normalizeUtils';

const SettingsInput = ({value, func, placeholder}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={func}
                placeholder={placeholder}
                placeholderTextColor={Colors.inputPlaceholder}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: normalize(10),
    },
    input: {
        backgroundColor: Colors.inputBackground,
        borderColor: Colors.inputBorder,
        borderRadius: normalize(10),
        borderStyle: 'solid',
        borderWidth: normalize(1),
        color: Colors.inputText,
        fontFamily: 'Universo-Regular',
        fontSize: normalize(12),
        padding: normalize(17),
        shadowColor: Colors.shadow,
        shadowOpacity: normalize(0.5),
        shadowRadius: normalize(15),
        width: '100%',
    },
});

export default SettingsInput;
