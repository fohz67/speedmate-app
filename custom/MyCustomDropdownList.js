import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const MyCustomDropdownList = ({label, options, selected, func}) => {
    const pickerItems = options.map(option => ({
        label: option,
        value: option
    }));

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
        fontSize: 16,
        marginRight: 10,
    },
    picker: {
        position: 'relative',
    }
});

const pickerStyles = StyleSheet.create({
    inputAndroid: {
        backgroundColor: 'white',
        borderRadius: 10,
        color: 'black',
        fontSize: 16,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    inputIOS: {
        backgroundColor: 'white',
        borderRadius: 10,
        color: 'black',
        fontSize: 16,
        paddingHorizontal: 15,
        paddingVertical: 10,
    }
});

export default MyCustomDropdownList;