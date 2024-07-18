import React from 'react';
import {I18nextProvider, useTranslation} from 'react-i18next';
import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import MyCustomBox from '../custom/MyCustomBox';
import MyCustomDropdownList from '../custom/MyCustomDropdownList';
import MyCustomInput from '../custom/MyCustomInput';
import MyCustomSlider from '../custom/MyCustomSlider';
import MyCustomTitle from '../custom/MyCustomTitle';
import useUserData from '../hooks/useAccount';
import useStatistics from '../hooks/useStatistics';
import {useConsts} from "../translations/consts";
import i18n from '../translations/i18n';

const AccountScreen = () => {
    const {t} = useTranslation();
    const consts = useConsts();

    const {
        profileImage, updateImage,
        firstName, updateFirstName,
        lastName, updateLastName,
        nickname, updateNickname,
        age, updateAge,
        vehicleType, updateVehicleType,
        vehicle, updateVehicle,
        model, updateModel
    } = useUserData();

    const {kilometers, timeSpent} = useStatistics();

    return (
        <I18nextProvider i18n={i18n}>
            <ScrollView contentContainerStyle={styles.container}>
                <TouchableOpacity onPress={updateImage}>
                    <Image source={profileImage} style={styles.profileImage}/>
                </TouchableOpacity>

                <View style={styles.section}>
                    <MyCustomTitle label={t('you')}/>
                    <MyCustomInput
                        value={firstName}
                        func={updateFirstName}
                        placeholder={t('firstName')}
                    />
                    <MyCustomInput
                        value={lastName}
                        func={updateLastName}
                        placeholder={t('lastName')}
                    />
                    <MyCustomSlider
                        label={t('age')}
                        value={age}
                        func={updateAge}
                        min={1}
                        max={100}
                        step={1}
                    />
                    <MyCustomInput
                        value={nickname}
                        func={updateNickname}
                        placeholder={t('nickname')}
                    />
                </View>

                <View style={styles.section}>
                    <MyCustomTitle label={t('vehicle')}/>
                    <MyCustomDropdownList
                        label={t('type')}
                        options={consts.vehicleTypes}
                        selected={vehicleType}
                        func={updateVehicleType}
                    />
                    <MyCustomInput
                        value={vehicle}
                        onChangeText={updateVehicle}
                        placeholder={t('vehicle')}
                    />
                    <MyCustomInput
                        value={model}
                        onChangeText={updateModel}
                        placeholder={t('model')}
                    />
                </View>

                <View style={styles.section}>
                    <MyCustomTitle label={t('statistics')}/>
                    <View style={styles.statsContainer}>
                        <MyCustomBox
                            label={t('odometer')}
                            value={kilometers}
                            unit="km"
                        />
                        <MyCustomBox
                            label={t('timeSpent')}
                            value={timeSpent}
                            unit="hours"
                        />
                    </View>
                </View>
            </ScrollView>
        </I18nextProvider>
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