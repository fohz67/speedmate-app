import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import useUserData from '../hooks/useAccount';
import useStatistics from '../hooks/useStatistics';
import MyCustomSlider from "../custom/MyCustomSlider";
import MyCustomButtonsList from "../custom/MyCustomButtonsList";

const vehicleTypes = ['Car', 'Motorbike', 'Electric Scooter', 'Scooter', 'Bike'];

const AccountScreen = () => {
    const {
        profileImage, setImage,
        firstName, setFirstName,
        lastName, setLastName,
        nickname, setNickname,
        age, setAge,
        vehicleType, setVehicleType,
        vehicle, setVehicle,
        model, setModel
    } = useUserData();

    const {kilometers, timeSpent} = useStatistics();

    const handleChange = (updateFunc) => (value) => {
        updateFunc(value);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity onPress={setImage}>
                <Image source={profileImage} style={styles.profileImage}/>
            </TouchableOpacity>

            <View style={styles.section}>
                <Text style={styles.heading}>You</Text>
                <TextInput
                    style={styles.input}
                    value={firstName}
                    onChangeText={handleChange(setFirstName)}
                    placeholder="First Name"
                    placeholderTextColor="#c7c7c7"
                />
                <TextInput
                    style={styles.input}
                    value={lastName}
                    onChangeText={handleChange(setLastName)}
                    placeholder="Last Name"
                    placeholderTextColor="#c7c7c7"
                />
                <TextInput
                    style={styles.input}
                    value={nickname}
                    onChangeText={handleChange(setNickname)}
                    placeholder="Nickname"
                    placeholderTextColor="#c7c7c7"
                />
                <MyCustomSlider
                    label="Age"
                    value={age}
                    onValueChange={handleChange(setAge)}
                    min={0}
                    max={100}
                    step={1}
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.heading}>Vehicle</Text>
                <MyCustomButtonsList
                    label="Type"
                    options={vehicleTypes}
                    selectedValue={vehicleType}
                    onSelect={handleChange(setVehicleType)}
                />
                <TextInput
                    style={styles.input}
                    value={vehicle}
                    onChangeText={handleChange(setVehicle)}
                    placeholder="Vehicle"
                    placeholderTextColor="#c7c7c7"
                />
                <TextInput
                    style={styles.input}
                    value={model}
                    onChangeText={handleChange(setModel)}
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
    element: {
        fontSize: 16,
        fontWeight: 'semibold',
        marginTop: 10,
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
        shadowOpacity: 0.03,
        shadowRadius: 15,
        width: '100%',
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
    statBox: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 10,
        padding: 20,
        shadowColor: 'black',
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
});

export default AccountScreen;