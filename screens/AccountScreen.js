import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import useUserData from '../hooks/useUserData';
import useStatistics from '../hooks/useStatistics';
import Slider from '@react-native-community/slider';

const vehicleTypes = ['Car', 'Motorbike', 'Electric Scooter', 'Scooter', 'Bike'];

const AccountScreen = () => {
    const {
        profileImage, pickImage,
        firstName, updateFirstName,
        lastName, updateLastName,
        nickname, updateNickname,
        age, updateAge,
        vehicleType, updateVehicleType,
        vehicle, updateVehicle,
        model, updateModel
    } = useUserData();

    const {kilometers, timeSpent} = useStatistics();

    const handleChange = (updateFunc) => (value) => {
        updateFunc(value);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity onPress={pickImage}>
                <Image source={profileImage} style={styles.profileImage}/>
            </TouchableOpacity>

            <View style={styles.section}>
                <Text style={styles.heading}>You</Text>
                <TextInput
                    style={styles.input}
                    value={firstName}
                    onChangeText={handleChange(updateFirstName)}
                    placeholder="First Name"
                    placeholderTextColor="#c7c7c7"
                />
                <TextInput
                    style={styles.input}
                    value={lastName}
                    onChangeText={handleChange(updateLastName)}
                    placeholder="Last Name"
                    placeholderTextColor="#c7c7c7"
                />
                <TextInput
                    style={styles.input}
                    value={nickname}
                    onChangeText={handleChange(updateNickname)}
                    placeholder="Nickname"
                    placeholderTextColor="#c7c7c7"
                />
                <Text style={styles.normal}>Age</Text>
                <View style={styles.flex}>
                    <Text style={styles.normal}>{age}</Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={100}
                        step={1}
                        value={age}
                        onValueChange={handleChange(updateAge)}
                    />
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.heading}>Vehicle</Text>
                <Text style={styles.normal}>Type</Text>
                <View style={styles.vehicleTypeContainer}>
                    {vehicleTypes.map((type) => (
                        <TouchableOpacity
                            key={type}
                            style={[
                                styles.vehicleTypeButton,
                                vehicleType === type && styles.selectedVehicleTypeButton
                            ]}
                            onPress={() => handleChange(updateVehicleType)(type)}
                        >
                            <Text style={[
                                styles.vehicleTypeButtonText,
                                vehicleType === type ? styles.vehicleTypeButtonTextSelected : styles.vehicleTypeButtonTextUnselected
                            ]}>{type}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <TextInput
                    style={styles.input}
                    value={vehicle}
                    onChangeText={handleChange(updateVehicle)}
                    placeholder="Vehicle"
                    placeholderTextColor="#c7c7c7"
                />
                <TextInput
                    style={styles.input}
                    value={model}
                    onChangeText={handleChange(updateModel)}
                    placeholder="Model"
                    placeholderTextColor="#c7c7c7"
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.heading}>Statistics</Text>
                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text style={styles.statLabel}>Odometer</Text>
                        <Text style={styles.statValue}>{kilometers} km</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statLabel}>Time Spent</Text>
                        <Text style={styles.statValue}>{timeSpent} hours</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexGrow: 1,
        padding: 20,
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        padding: 15,
        shadowColor: 'black',
        shadowOffset: 0,
        shadowOpacity: 0.03,
        shadowRadius: 15,
        width: '100%',
    },
    normal: {
        fontSize: 16,
        fontWeight: 'semibold',
        marginBottom: 10,
        marginTop: 10,
    },
    profileImage: {
        alignSelf: 'center',
        borderRadius: 50,
        height: 100,
        marginBottom: 20,
        marginTop: 20,
        width: 100,
    },
    section: {
        marginBottom: 20,
        width: '100%',
    },
    selectedVehicleTypeButton: {
        backgroundColor: 'black',
    },
    slider: {
        marginTop: 10,
        alignSelf: 'center',
        marginBottom: 10,
        width: '90%',
    },
    statBox: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 10,
        padding: 20,
        shadowColor: 'black',
        shadowOffset: 0,
        shadowOpacity: 0.03,
        shadowRadius: 15,
        width: '48%',
    },
    statLabel: {
        fontSize: 14,
        marginBottom: 5,
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    statsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    vehicleTypeButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        marginRight: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: 'black',
        shadowOffset: 0,
        shadowOpacity: 0.03,
        shadowRadius: 15,
    },
    vehicleTypeButtonText: {
        fontSize: 16,
    },
    vehicleTypeButtonTextSelected: {
        color: 'white',
    },
    vehicleTypeButtonTextUnselected: {
        color: 'black',
    },
    vehicleTypeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
});

export default AccountScreen;