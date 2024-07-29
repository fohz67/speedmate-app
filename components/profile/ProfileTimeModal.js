import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../assets/theme/colors';
import {convertSecondsToFullTime} from "../../utils/convertUtils";
import {normalize} from "../../utils/normalizeUtils";

const ProfileTimeModal = ({statStoppedTime, statRideTime}) => {
    const {t} = useTranslation();

    const fullTime = convertSecondsToFullTime(statStoppedTime + statRideTime);
    const rideTime = convertSecondsToFullTime(statRideTime);
    const stoppedTime = convertSecondsToFullTime(statStoppedTime);

    return (
        <View style={styles.container}>
            <View style={styles.timeSection}>
                <Text style={styles.title}>{t('totalTime')}</Text>
                <Text>{formatTime(fullTime)}</Text>
            </View>

            <View style={styles.timeSection}>
                <Text style={styles.title}>{t('rideTime')}</Text>
                <Text>{formatTime(rideTime)}</Text>
            </View>

            <View style={styles.timeSection}>
                <Text style={styles.title}>{t('stoppedTime')}</Text>
                <Text>{formatTime(stoppedTime)}</Text>
            </View>
        </View>
    );
};

const formatTime = (timeObject) => {
    const {t} = useTranslation();

    const timeStrings = [];

    if (timeObject.years > 0) {
        timeStrings.push(
            <Text key="years">
                <Text style={styles.number}>{timeObject.years}</Text>
                <Text style={styles.unit}> {t(timeObject.years > 1 ? 'years' : 'year')}</Text>
            </Text>
        );
    }

    if (timeObject.months > 0) {
        timeStrings.push(
            <Text key="months">
                <Text style={styles.number}>{timeObject.months}</Text>
                <Text style={styles.unit}> {t(timeObject.months > 1 ? 'months' : 'month')}</Text>
            </Text>
        );
    }

    if (timeObject.weeks > 0) {
        timeStrings.push(
            <Text key="weeks">
                <Text style={styles.number}>{timeObject.weeks}</Text>
                <Text style={styles.unit}> {t(timeObject.weeks > 1 ? 'weeks' : 'week')}</Text>
            </Text>
        );
    }

    if (timeObject.days > 0) {
        timeStrings.push(
            <Text key="days">
                <Text style={styles.number}>{timeObject.days}</Text>
                <Text style={styles.unit}> {t(timeObject.days > 1 ? 'days' : 'day')}</Text>
            </Text>
        );
    }

    if (timeObject.hours > 0) {
        timeStrings.push(
            <Text key="hours">
                <Text style={styles.number}>{timeObject.hours}</Text>
                <Text style={styles.unit}> {t(timeObject.hours > 1 ? 'hours' : 'hour')}</Text>
            </Text>
        );
    }

    if (timeObject.minutes > 0) {
        timeStrings.push(
            <Text key="minutes">
                <Text style={styles.number}>{timeObject.minutes}</Text>
                <Text style={styles.unit}> {t(timeObject.minutes > 1 ? 'minutes' : 'minute')}</Text>
            </Text>
        );
    }

    if (timeObject.seconds > 0) {
        timeStrings.push(
            <Text key="seconds">
                <Text style={styles.number}>{timeObject.seconds}</Text>
                <Text style={styles.unit}> {t(timeObject.seconds > 1 ? 'seconds' : 'second')}</Text>
            </Text>
        );
    }

    return timeStrings.length > 0 ? timeStrings.reduce((prev, curr) => [prev, ' ', curr]) : '';
};

const styles = StyleSheet.create({
    container: {
        marginTop: normalize(30),
    },
    number: {
        color: Colors.default.app.title,
        fontFamily: 'Universo-Black',
        fontSize: normalize(25),
    },
    timeSection: {
        marginBottom: normalize(30),
    },
    title: {
        color: Colors.default.app.title,
        fontFamily: 'Universo-Regular',
        fontSize: normalize(18),
        marginBottom: normalize(5),
    },
    unit: {
        color: Colors.default.app.text,
        fontFamily: 'Universo-Regular',
        fontSize: normalize(14),
    },
});

export default ProfileTimeModal;
