import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, View} from 'react-native';
import MyCustomSeparator from '../components/global/GlobalSeparator';
import GlobalTitle from '../components/global/GlobalTitle';
import SettingsDropDownList from '../components/settings/SettingsDropDownList';
import SettingsSlider from "../components/settings/SettingsSlider";
import useOptions from "../hooks/useOptions";
import {useSettingsContext} from '../SettingsContext';

const SettingsScreen = () => {
    const {t} = useTranslation();
    const options = useOptions();

    const {
        language,
        updateLanguage,
        speedometerMaxValue,
        updateSpeedometerMaxValue,
        unit,
        updateUnit,
        arcWidth,
        updateArcWidth
    } = useSettingsContext();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.section}>
                <GlobalTitle label={t('speedometer')}/>
                <SettingsDropDownList
                    label={t('unit')}
                    options={options.units}
                    selected={unit}
                    func={updateUnit}
                />
                <MyCustomSeparator/>
                <SettingsSlider
                    label={t('maxSpeed')}
                    value={speedometerMaxValue}
                    func={updateSpeedometerMaxValue}
                    min={50}
                    max={450}
                    step={5}
                />
                <SettingsSlider
                    label={t('arcWidth')}
                    value={arcWidth}
                    func={updateArcWidth}
                    min={1}
                    max={50}
                    step={1}
                />
            </View>
            <View style={styles.section}>
                <GlobalTitle label="Application"/>
                <SettingsDropDownList
                    label={t('language')}
                    options={options.languages}
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
