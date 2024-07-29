import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Colors} from '../../assets/styles/colors';
import {normalize} from '../../utils/normalizeUtils';

const SettingsDropDownList = ({label, options, selected, func}) => {
    const pickerItems = options.map((option, index) => ({
        label: option,
        value: index
    }));

    const pickerStyles = StyleSheet.create({
        inputAndroid: {
            backgroundColor: Colors.inputBackground,
            borderColor: Colors.inputBorder,
            borderRadius: normalize(10),
            borderStyle: 'solid',
            borderWidth: normalize(1),
            color: Colors.inputText,
            fontFamily: 'Universo-Bold',
            fontSize: normalize(11),
            paddingHorizontal: normalize(15),
            paddingVertical: normalize(10),
            shadowColor: Colors.shadow,
            shadowOpacity: normalize(0.5),
            shadowRadius: normalize(15),
        },
        inputIOS: {
            backgroundColor: Colors.inputBackground,
            borderColor: Colors.inputBorder,
            borderRadius: normalize(10),
            borderStyle: 'solid',
            borderWidth: normalize(1),
            color: Colors.inputText,
            fontFamily: 'Universo-Bold',
            fontSize: normalize(11),
            paddingHorizontal: normalize(15),
            paddingVertical: normalize(10),
            shadowColor: Colors.shadow,
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
        color: Colors.defaultText,
        fontFamily: 'Universo-Regular',
        fontSize: normalize(13),
        marginLeft: normalize(5),
        marginTop: normalize(5),
    },
    picker: {
        position: 'relative',
    }
});

export default SettingsDropDownList;
