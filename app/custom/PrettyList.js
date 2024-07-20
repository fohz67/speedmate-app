import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import theme from '../theme';

const PrettyList = ({label, options, selected, func}) => {
    const pickerItems = options.map((option, index) => ({
        label: option,
        value: index
    }));

    const pickerStyles = StyleSheet.create({
        inputAndroid: {
            backgroundColor: theme.default.input.background,
            borderColor: theme.default.input.border,
            borderRadius: 10,
            borderStyle: 'solid',
            borderWidth: 1,
            color: theme.default.input.text,
            fontSize: 16,
            paddingHorizontal: 15,
            paddingVertical: 10,
            shadowColor: theme.default.app.shadow,
            shadowOpacity: 0.5,
            shadowRadius: 15,
        },
        inputIOS: {
            backgroundColor: theme.default.input.background,
            borderColor: theme.default.input.border,
            borderRadius: 12,
            borderStyle: 'solid',
            borderWidth: 1,
            color: theme.default.input.text,
            fontSize: 16,
            paddingHorizontal: 15,
            paddingVertical: 10,
            shadowColor: theme.default.app.shadow,
            shadowOpacity: 0.5,
            shadowRadius: 15,
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
        marginLeft: 5,
        marginTop: 10,
    },
    icon: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    label: {
        color: theme.default.app.text,
        fontSize: 17,
        marginRight: 10,
    },
    picker: {
        position: 'relative',
    }
});

export default PrettyList;