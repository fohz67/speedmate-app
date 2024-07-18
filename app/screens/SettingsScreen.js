import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, View} from 'react-native';
import MyCustomDropdownList from '../custom/MyCustomDropdownList';
import MyCustomSeparator from '../custom/MyCustomSeparator';
import MyCustomSlider from '../custom/MyCustomSlider';
import MyCustomSwitch from '../custom/MyCustomSwitch';
import MyCustomTitle from '../custom/MyCustomTitle';
import {useConsts} from "../hooks/useConsts";
import useSettings from '../hooks/useSettings';
import useTheme from '../hooks/useTheme';

const SettingsScreen = () => {
    const {t} = useTranslation();
    const consts = useConsts();

    const {
        unit, updateUnit,
        maxSpeed, updateMaxSpeed,
        orientationLock, updateOrientationLock,
        showGPSAccuracy, updateShowGPSAccuracy,
        smoothNeedleAnimation, updateSmoothNeedleAnimation,
        temperatureUnit, updateTemperatureUnit,
        autoStartTrip, updateAutoStartTrip,
        appAppearance, updateAppAppearance,
        speedometerSide, updateSpeedometerSide,
        language, updateLanguage,
    } = useSettings();

    const theme = useTheme(appAppearance);

    return (
        <ScrollView contentContainerStyle={[styles.container, {backgroundColor: theme.background}]}>
            <View style={styles.section}>
                <MyCustomTitle label={t('speedometer')}/>
                <MyCustomDropdownList
                    label={t('unit')}
                    options={consts.units}
                    selected={unit}
                    func={updateUnit}
                />
                <MyCustomSeparator/>
                <MyCustomSlider
                    label={t('maxSpeed')}
                    value={maxSpeed}
                    func={updateMaxSpeed}
                    min={50}
                    max={450}
                    step={5}
                />
                <MyCustomSeparator/>
                <MyCustomSwitch
                    label={t('showGPSAccuracy')}
                    value={showGPSAccuracy}
                    func={updateShowGPSAccuracy}
                />
                <MyCustomSeparator/>
                <MyCustomSwitch
                    label={t('smoothNeedleAnimation')}
                    value={smoothNeedleAnimation}
                    func={updateSmoothNeedleAnimation}
                />
                <MyCustomSeparator/>
                <MyCustomDropdownList
                    label={t('temperatureUnit')}
                    options={consts.temperatureUnits}
                    selected={temperatureUnit}
                    func={updateTemperatureUnit}
                />
                <MyCustomSeparator/>
                <MyCustomSwitch
                    label={t('autoStartTrip')}
                    value={autoStartTrip}
                    func={updateAutoStartTrip}
                />
                <MyCustomSeparator/>
                <MyCustomDropdownList
                    label={t('speedometerSide')}
                    options={consts.speedometerSides}
                    selected={speedometerSide}
                    func={updateSpeedometerSide}
                />
            </View>

            <View style={styles.section}>
                <MyCustomTitle label="Application"/>
                <MyCustomDropdownList
                    label={t('orientationLock')}
                    options={consts.orientationLocks}
                    selected={orientationLock}
                    func={updateOrientationLock}
                />
                <MyCustomSeparator/>
                <MyCustomDropdownList
                    label={t('appAppearance')}
                    options={consts.appAppearances}
                    selected={appAppearance}
                    func={updateAppAppearance}
                />
                <MyCustomSeparator/>
                <MyCustomDropdownList
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