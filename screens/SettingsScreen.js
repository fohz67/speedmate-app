import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, View} from 'react-native';
import GlobalSeparator from '../components/global/GlobalSeparator';
import GlobalTitle from '../components/global/GlobalTitle';
import SettingsDropDownList from '../components/settings/SettingsDropDownList';
import SettingsSlider from '../components/settings/SettingsSlider';
import useOptions from '../hooks/useOptions';
import {useSettingsContext} from '../SettingsContext';
import {convertSpeed} from "../utils/convertUtils";
import {normalize} from '../utils/normalizeUtils';

export default function SettingsScreen() {
    const {t} = useTranslation();
    const options = useOptions();

    const {
        language,
        speedometerMaxValue,
        unit,
        accuracyThreshold,
        speedThreshold,
        arcWidth,
        updateLanguage,
        updateSpeedometerMaxValue,
        updateUnit,
        updateAccuracyThreshold,
        updateSpeedThreshold,
        updateArcWidth,
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

                <GlobalSeparator/>
                <SettingsSlider
                    label={t('maxSpeed')}
                    value={speedometerMaxValue}
                    func={updateSpeedometerMaxValue}
                    min={50}
                    max={450}
                    step={5}
                />

                <GlobalSeparator/>
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
                <GlobalTitle label={t('gps')}/>

                <SettingsSlider
                    label={t('accuracyThreshold')}
                    value={accuracyThreshold}
                    func={updateAccuracyThreshold}
                    min={0}
                    max={20}
                    step={1}
                />

                <GlobalSeparator/>
                <SettingsSlider
                    label={t('speedThreshold')}
                    value={convertSpeed(speedThreshold, unit)}
                    func={updateSpeedThreshold}
                    min={0.1}
                    max={3}
                    step={0.1}
                />
            </View>
            <View style={styles.section}>
                <GlobalTitle label={t('application')}/>

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
        top: normalize(-20),
        paddingHorizontal: normalize(20),
        paddingBottom: normalize(30),
    },
    section: {
        width: '100%',
    }
});
