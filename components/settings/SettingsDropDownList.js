import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Colors from '../../assets/theme/colors';
import {normalizeUtils} from '../../utils/normalizeUtils';

const SettingsDropDownList = ({label, options, selected, func}) => {
    const pickerItems = options.map((option, index) => ({
        label: option,
        value: index
    }));

    const pickerStyles = StyleSheet.create({
        inputAndroid: {
            backgroundColor: Colors.default.input.background,
            borderColor: Colors.default.input.border,
            borderRadius: normalizeUtils(10),
            borderStyle: 'solid',
            borderWidth: normalizeUtils(1),
            color: Colors.default.input.text,
            fontFamily: 'Universo-Bold',
            fontSize: normalizeUtils(14),
            paddingHorizontal: normalizeUtils(15),
            paddingVertical: normalizeUtils(10),
            shadowColor: Colors.default.app.shadow,
            shadowOpacity: normalizeUtils(0.5),
            shadowRadius: normalizeUtils(15),
        },
        inputIOS: {
            backgroundColor: Colors.default.input.background,
            borderColor: Colors.default.input.border,
            borderRadius: normalizeUtils(10),
            borderStyle: 'solid',
            borderWidth: normalizeUtils(1),
            color: Colors.default.input.text,
            fontFamily: 'Universo-Bold',
            fontSize: normalizeUtils(14),
            paddingHorizontal: normalizeUtils(15),
            paddingVertical: normalizeUtils(10),
            shadowColor: Colors.default.app.shadow,
            shadowOpacity: normalizeUtils(0.5),
            shadowRadius: normalizeUtils(15),
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.picker}>
                <RNPickerSelect
                    onValueChange={(value) => func(value)}
                    items={pickerItems}
                    value={selected}
                    style={pickerStyles}
                    useNativeAndroidPickerStyle={false}
                    placeholder={{}}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: normalizeUtils(3),
        marginLeft: normalizeUtils(5),
        marginTop: normalizeUtils(13),
    },
    label: {
        color: Colors.default.app.text,
        fontFamily: 'Universo-Regular',
        fontSize: normalizeUtils(14),
        marginRight: normalizeUtils(10),
    },
    picker: {
        position: 'relative',
    }
});

export default SettingsDropDownList;
