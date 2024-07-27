import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import useUnits from "../../hooks/useUnits";
import normalize from "../../utils/normalize";
import SpeedometerStat from "./SpeedometerStat";

const SpeedometerPanel = ({time, stopped, altitude, averageSpeed, maxSpeed, tripDistance}) => {
    const {t} = useTranslation();
    const units = useUnits();

    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <SpeedometerStat
                    label={t('avgSpeed')}
                    unit={units.speed}
                    value={averageSpeed}
                />
                <SpeedometerStat
                    label={t('distance')}
                    unit={units.distance}
                    value={tripDistance}
                />
                <SpeedometerStat
                    label={t('time')}
                    unit=""
                    little={true}
                    value={time}
                />
            </View>

            <View style={styles.column}>
                <SpeedometerStat
                    label={t('maxSpeed')}
                    unit={units.speed}
                    value={maxSpeed}
                />
                <SpeedometerStat
                    label={t('altitude')}
                    unit={units.altitude}
                    value={altitude}
                />
                <SpeedometerStat
                    label={t('stopped')}
                    unit=""
                    little={true}
                    value={stopped}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    column: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-start',
    },
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: normalize(20),
        justifyContent: 'space-between',
    },
});

export default SpeedometerPanel;
