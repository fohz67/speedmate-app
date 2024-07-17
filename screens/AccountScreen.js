// screens/AccountScreen.js
import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import useUserData from '../hooks/useUserData';
import useStatistics from '../hooks/useStatistics';

const AccountScreen = () => {
    const {
        profileImage, updateProfileImage,
        name, updateName,
        vehicle, updateVehicle,
        model, updateModel
    } = useUserData();

    const {kilometers, timeSpent} = useStatistics();

    const [isEdited, setIsEdited] = React.useState(false);

    const handleChange = (updateFunc) => (value) => {
        updateFunc(value);
        setIsEdited(true);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{uri: profileImage}} style={styles.profileImage}/>

            <View style={styles.section}>
                <Text style={styles.heading}>You</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={handleChange(updateName)}
                    placeholder="Name"
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.heading}>Vehicle</Text>
                <TextInput
                    style={styles.input}
                    value={vehicle}
                    onChangeText={handleChange(updateVehicle)}
                    placeholder="Vehicle"
                />
                <TextInput
                    style={styles.input}
                    value={model}
                    onChangeText={handleChange(updateModel)}
                    placeholder="Model"
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

            {isEdited && (
                <Button
                    title="Save"
                    color="#1E90FF"
                    onPress={() => setIsEdited(false)}
                />
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        alignSelf: 'center'
    },
    section: {
        width: '100%',
        marginBottom: 20,
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        width: '100%',
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
    statsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    statBox: {
        width: '48%',
        padding: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'center',
    },
    statLabel: {
        fontSize: 16,
        marginBottom: 5,
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default AccountScreen;