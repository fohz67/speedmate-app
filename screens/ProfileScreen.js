import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import GlobalTitle from "../components/global/GlobalTitle";
import ProfileStatBox from "../components/profile/ProfileStatBox";
import SettingsDropDownList from "../components/settings/SettingsDropDownList";
import SettingsInput from "../components/settings/SettingsInput";
import SettingsSlider from "../components/settings/SettingsSlider";
import useOptions from "../hooks/useOptions";
import useUnits from "../hooks/useUnits";
import {useSettingsContext} from "../SettingsContext";
import {convertDistance} from "../utils/convertorUtils";
import normalizeUtils from "../utils/normalizeUtils";

export default function ProfileScreen() {
    const {t} = useTranslation();
    const options = useOptions();
    const units = useUnits();

    const {
        unit,
        profilePicture,
        firstName,
        lastName,
        age,
        nickname,
        vehicleType,
        vehicleBrand,
        vehicleModel,
        statOdometer,
        statTime,
        pickImage,
        updateFirstName,
        updateLastName,
        updateAge,
        updateNickname,
        updateVehicleType,
        updateVehicleBrand,
        updateVehicleModel,
        updateStatOdometer,
        updateStatTime,
    } = useSettingsContext();

    const photo = profilePicture ? {uri: profilePicture} : require('../assets/default-picture.png');

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity onPress={pickImage}>
                <Image
                    source={photo}
                    style={styles.profileImage}
                />
            </TouchableOpacity>

            <View style={styles.section}>
                <GlobalTitle label={t('profile')}/>

                <SettingsInput
                    value={firstName}
                    func={updateFirstName}
                    placeholder={t('firstName')}
                />
                <SettingsInput
                    value={lastName}
                    func={updateLastName}
                    placeholder={t('lastName')}
                />
                <SettingsSlider
                    label={t('age')}
                    value={age}
                    func={updateAge}
                    min={1}
                    max={100}
                    step={1}
                />
                <SettingsInput
                    value={nickname}
                    func={updateNickname}
                    placeholder={t('nickname')}
                />
            </View>

            <View style={styles.section}>
                <GlobalTitle label={t('vehicleInformation')}/>

                <SettingsDropDownList
                    label={t('vehicleType')}
                    options={options.vehicleTypes}
                    selected={vehicleType}
                    func={updateVehicleType}
                />
                <SettingsInput
                    value={vehicleBrand}
                    func={updateVehicleBrand}
                    placeholder={t('vehicleBrand')}
                />
                <SettingsInput
                    value={vehicleModel}
                    func={updateVehicleModel}
                    placeholder={t('vehicleModel')}
                />
            </View>

            <View style={styles.section}>
                <GlobalTitle label={t('statistics')}/>

                <View style={styles.statsContainer}>
                    <ProfileStatBox
                        label={t('odometer')}
                        value={convertDistance(statOdometer, unit)}
                        unit={units.distance}
                    />
                    <ProfileStatBox
                        label={t('totalTime')}
                        value={statTime}
                        unit="h"
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexGrow: 1,
        paddingHorizontal: normalizeUtils(20),
    },
    profileImage: {
        alignSelf: 'center',
        borderRadius: normalizeUtils(50),
        height: normalizeUtils(100),
        marginTop: normalizeUtils(40),
        marginBottom: normalizeUtils(-30),
        width: normalizeUtils(100),
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
