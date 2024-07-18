import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const MyCustomDropdownList = ({label, options, selected, func}) => {
    const pickerItems = options.map(option => ({
        label: option,
        value: option
    }));

    return (
        <View style={styles.view}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.container}>
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
        position: 'relative',
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
    view: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
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