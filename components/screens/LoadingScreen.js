import React from 'react';
import {useTranslation} from "react-i18next";
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../assets/styles/colors';

export const LoadingScreen = () => {
    const {t} = useTranslation();

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large"
                               color={Colors.speedometerLine}/>
            <Text style={styles.text}>{t('loading')}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: Colors.background,
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: Colors.defaultText,
        fontFamily: 'Universo-Bold',
        fontSize: 20,
        marginTop: 20,
    },
});
