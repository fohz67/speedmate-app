import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const MyCustomButtonsList = ({label, options, selected, func}) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{label}</Text>
            <View style={styles.container}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {options.map((value) => (
                        <TouchableOpacity
                            key={value}
                            style={[
                                styles.item,
                                selected === value ? styles.buttonSelected : styles.buttonUnselected
                            ]}
                            onPress={() => func(value)}>
                            <Text style={[
                                styles.text,
                                selected === value ? styles.textSelected : styles.textUnselected
                            ]}>{value}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonSelected: {
        backgroundColor: 'black',
    },
    buttonUnselected: {
        backgroundColor: 'white',
    },
    container: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    item: {
        borderRadius: 10,
        marginEnd: 8,
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: 'black',
        shadowOpacity: 0.03,
        shadowRadius: 15,
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
    view: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 5,
        marginRight: -5,
        marginTop: 10,
    },
});

export default MyCustomButtonsList;