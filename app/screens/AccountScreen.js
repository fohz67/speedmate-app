import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import PrettyBox from '../custom/PrettyBox';
import PrettyInput from '../custom/PrettyInput';
import PrettyList from '../custom/PrettyList';
import PrettySlider from '../custom/PrettySlider';
import PrettyTitle from '../custom/PrettyTitle';
import useUserData from '../hooks/useAccount';
import useOptions from "../hooks/useOptions";
import useStatistics from '../hooks/useStatistics';

const AccountScreen = () => {
    const {t} = useTranslation();
    const options = useOptions();

    const {
        profileImage,
        updateImage,
        firstName,
        updateFirstName,
        lastName,
        updateLastName,
        nickname,
        updateNickname,
        age,
        updateAge,
        vehicleType,
        updateVehicleType,
        vehicle,
        updateVehicle,
        model,
        updateModel
    } = useUserData();

    const {
        odo,
        time
    } = useStatistics();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity onPress={updateImage}>
                <Image source={profileImage}
                       style={styles.profileImage}/>
            </TouchableOpacity>

            <View style={styles.section}>
                <PrettyTitle label={t('you')}/>
                <PrettyInput
                    value={firstName}
                    func={updateFirstName}
                    placeholder={t('firstName')}
                />
                <PrettyInput
                    value={lastName}
                    func={updateLastName}
                    placeholder={t('lastName')}
                />
                <PrettySlider
                    label={t('age')}
                    value={age}
                    func={updateAge}
                    min={1}
                    max={100}
                    step={1}
                />
                <PrettyInput
                    value={nickname}
                    func={updateNickname}
                    placeholder={t('nickname')}
                />
            </View>

            <View style={styles.section}>
                <PrettyTitle label={t('vehicle')}/>
                <PrettyList
                    label={t('type')}
                    options={options.vehicleTypes}
                    selected={vehicleType}
                    func={updateVehicleType}
                />
                <PrettyInput
                    value={vehicle}
                    onChangeText={updateVehicle}
                    placeholder={t('vehicle')}
                />
                <PrettyInput
                    value={model}
                    onChangeText={updateModel}
                    placeholder={t('model')}
                />
            </View>

            <View style={styles.section}>
                <PrettyTitle label={t('statistics')}/>
                <View style={styles.statsContainer}>
                    <PrettyBox
                        label={t('odometer')}
                        value={odo}
                        unit="km"
                    />
                    <PrettyBox
                        label={t('time')}
                        value={time}
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
