import React from 'react';
import {useTranslation} from "react-i18next";
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../assets/styles/colors';

export const ErrorScreen = ({errorMessage}) => {
    const {t} = useTranslation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('error')}</Text>
            <Text style={styles.message}>{errorMessage}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: Colors.background,
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    message: {
        color: Colors.defaultText,
        fontFamily: 'Universo-Regular',
        fontSize: 16,
        textAlign: 'center',
    },
    title: {
        color: Colors.categoryTitle,
        fontFamily: 'Universo-Black',
        fontSize: 30,
        marginBottom: 20,
        textAlign: 'center',
    },
});
