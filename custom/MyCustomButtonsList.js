import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const MyCustomButtonsList = ({options, selectedValue, onSelect}) => {
    return (
        <View>
            <Text style={styles.label}>Type</Text>
            <View style={styles.listContainer}>
                {options.map((value) => (
                    <TouchableOpacity
                        key={value}
                        style={[styles.list, selectedValue === value && styles.selected]}
                        onPress={() => onSelect(value)}>
                        <Text style={[styles.text, selectedValue === value ? styles.textSelected : styles.textUnselected]}>{value}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        marginBottom: 8,
        marginTop: 5,
    },
    list: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        marginRight: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: 'black',
        shadowOpacity: 0.03,
        shadowRadius: 15,
    },
    listContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    selected: {
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
    },
    textSelected: {
        color: 'white',
    },
    textUnselected: {
        color: 'black',
    },
});

export default MyCustomButtonsList;