import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import useSettings from "../hooks/useSettings";
import useTheme from "../hooks/useTheme";

const MyCustomDropdownList = ({label, options, selected, func}) => {
    const {appAppearance} = useSettings();
    const theme = useTheme(appAppearance);

    const pickerItems = options.map((option, index) => ({
        label: option,
        value: index
    }));

    const pickerStyles = StyleSheet.create({
        inputAndroid: {
            backgroundColor: theme.inputBackground,
            borderRadius: 10,
            color: theme.text,
            fontSize: 16,
            paddingHorizontal: 15,
            paddingVertical: 10,
        },
        inputIOS: {
            backgroundColor: theme.inputBackground,
            borderRadius: 10,
            color: theme.text,
            fontSize: 16,
            paddingHorizontal: 15,
            paddingVertical: 10,
        }
    });

    return (
        <View style={styles.container}>
            <Text style={[styles.label, {color: theme.text}]}>{label}</Text>
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
        marginLeft: 5,
        marginTop: 10,
    },
    icon: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    label: {
        fontSize: 16,
        marginRight: 10,
    },
    picker: {
        position: 'relative',
    }
});

export default MyCustomDropdownList;