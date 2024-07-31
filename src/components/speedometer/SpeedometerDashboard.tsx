import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import {Unit, useUnits} from "../../hooks/useUnits.tsx";
import {normalize} from '../../utilitaries/normalize';
import {SpeedometerDashboardItem} from "./SpeedometerDashboardItem.tsx";

interface SpeedometerDashboardProps {
    altitude: string;
    averageSpeed: string;
    distance: string;
    maxSpeed: string;
    stopped: string;
    time: string;
}

export const SpeedometerDashboard: React.FC<SpeedometerDashboardProps> = (
    {
        altitude,
        averageSpeed,
        distance,
        maxSpeed,
        stopped,
        time
    }: SpeedometerDashboardProps
) => {
    const {t} = useTranslation();
    const units: Unit = useUnits();

    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <SpeedometerDashboardItem
                    label={t('avgSpeed')}
                    unit={units.speed}
                    value={averageSpeed}
                />
                <SpeedometerDashboardItem
                    label={t('distance')}
                    unit={units.distanceKm}
                    value={distance}
                />
                <SpeedometerDashboardItem
                    label={t('time')}
                    unit=''
                    little={true}
                    value={time}
                />
            </View>

            <View style={styles.column}>
                <SpeedometerDashboardItem
                    label={t('maxSpeed')}
                    unit={units.speed}
                    value={maxSpeed}
                />
                <SpeedometerDashboardItem
                    label={t('altitude')}
                    unit={units.altitude}
                    value={altitude}
                />
                <SpeedometerDashboardItem
                    label={t('stopped')}
                    unit=''
                    little={true}
                    value={stopped}
                />
            </View>
        </View>
    );
};

const styles: any = StyleSheet.create({
    column: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-start',
    },
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: normalize(20),
    },
});
