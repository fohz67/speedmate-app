import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Colors from '../../assets/theme/colors';
import {normalize} from '../../utils/normalizeUtils';

const SettingsDropDownList = ({label, options, selected, func}) => {
    const pickerItems = options.map((option, index) => ({
        label: option,
        value: index
    }));

    const pickerStyles = StyleSheet.create({
        inputAndroid: {
            backgroundColor: Colors.default.input.background,
            borderColor: Colors.default.input.border,
            borderRadius: normalize(10),
            borderStyle: 'solid',
            borderWidth: normalize(1),
            color: Colors.default.input.text,
            fontFamily: 'Universo-Bold',
            fontSize: normalize(14),
            paddingHorizontal: normalize(15),
            paddingVertical: normalize(10),
            shadowColor: Colors.default.app.shadow,
            shadowOpacity: normalize(0.5),
            shadowRadius: normalize(15),
        },
        inputIOS: {
            backgroundColor: Colors.default.input.background,
            borderColor: Colors.default.input.border,
            borderRadius: normalize(10),
            borderStyle: 'solid',
            borderWidth: normalize(1),
            color: Colors.default.input.text,
            fontFamily: 'Universo-Bold',
            fontSize: normalize(14),
            paddingHorizontal: normalize(15),
            paddingVertical: normalize(10),
            shadowColor: Colors.default.app.shadow,
            shadowOpacity: normalize(0.5),
            shadowRadius: normalize(15),
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
        marginBottom: normalize(3),
        marginTop: normalize(13),
    },
    label: {
        color: Colors.default.app.text,
        fontFamily: 'Universo-Regular',
        fontSize: normalize(14),
        marginTop: normalize(5),
    },
    picker: {
        position: 'relative',
    }
});

export default SettingsDropDownList;
