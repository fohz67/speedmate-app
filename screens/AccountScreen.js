import React from 'react';
import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import useUserData from '../hooks/useAccount';
import useStatistics from '../hooks/useStatistics';
import MyCustomSlider from "../custom/MyCustomSlider";
import MyCustomTitle from "../custom/MyCustomTitle";
import MyCustomBox from "../custom/MyCustomBox";
import MyCustomInput from "../custom/MyCustomInput";
import MyCustomDropdownList from "../custom/MyCustomDropdownList";

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

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity onPress={setImage}>
                <Image source={profileImage} style={styles.profileImage}/>
            </TouchableOpacity>

            <View style={styles.section}>
                <MyCustomTitle label="You"/>
                <MyCustomInput
                    value={firstName}
                    func={setFirstName}
                    placeholder="First Name"
                />
                <MyCustomInput
                    value={lastName}
                    func={setLastName}
                    placeholder="Last Name"
                />
                <MyCustomSlider
                    label="Age"
                    value={age}
                    func={setAge}
                    min={1}
                    max={100}
                    step={1}
                />
                <MyCustomInput
                    value={nickname}
                    func={setNickname}
                    placeholder="Nickname"
                />
            </View>

            <View style={styles.section}>
                <MyCustomTitle label="Vehicle"/>
                <MyCustomDropdownList
                    label="Type"
                    options={vehicleTypes}
                    selected={vehicleType}
                    func={setVehicleType}
                />
                <MyCustomInput
                    value={vehicle}
                    onChangeText={setVehicle}
                    placeholder="Vehicle"
                />
                <MyCustomInput
                    value={model}
                    onChangeText={setModel}
                    placeholder="Model"
                />
            </View>

            <View style={styles.section}>
                <MyCustomTitle label="Statistics"/>
                <View style={styles.statsContainer}>
                    <MyCustomBox
                        label="Odometer"
                        value={kilometers}
                        unit="km"
                    />
                    <MyCustomBox
                        label="Time Spent"
                        value={timeSpent}
                        unit="hours"
                    />
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
    profileImage: {
        alignSelf: 'center',
        borderRadius: 50,
        height: 100,
        marginTop: 15,
        width: 100,
    },
    section: {
        width: '100%',
    },
    statsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});

export default AccountScreen;