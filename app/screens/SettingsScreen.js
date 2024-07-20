import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, View} from 'react-native';
import PrettyList from '../custom/PrettyList';
import MyCustomSeparator from '../custom/PrettySeparator';
import PrettySlider from "../custom/PrettySlider";
import PrettyTitle from '../custom/PrettyTitle';
import {useOptions} from "../hooks/useOptions";
import useSettings from '../hooks/useSettings';

const SettingsScreen = () => {
    const {t} = useTranslation();
    const consts = useOptions();

    const {
        unit, updateUnit,
        maxSpeed, updateMaxSpeed,
        appAppearance, updateAppAppearance,
        language, updateLanguage,
    } = useSettings();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.section}>
                <PrettyTitle label={t('speedometer')}/>
                <PrettyList
                    label={t('unit')}
                    options={consts.units}
                    selected={unit}
                    func={updateUnit}
                />
                <MyCustomSeparator/>
                <PrettySlider
                    label={t('maxSpeed')}
                    value={maxSpeed}
                    func={updateMaxSpeed}
                    min={50}
                    max={450}
                    step={5}
                />
            </View>
            <View style={styles.section}>
                <PrettyTitle label="Application"/>
                <PrettyList
                    label={t('language')}
                    options={consts.languages}
                    selected={language}
                    func={updateLanguage}
                />
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
    },
    section: {
        width: '100%',
    }
});

export default SettingsScreen;