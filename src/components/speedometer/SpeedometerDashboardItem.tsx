import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {__Colors} from "../../../assets/misc/colors.tsx";
import {__Fonts} from "../../../assets/misc/fonts.tsx";
import {normalize} from "../../utilitaries/normalize.tsx";

interface SpeedometerDashboardItemProps {
    label: string;
    unit: string;
    value: number | string;
    little?: boolean;
}

export const SpeedometerDashboardItem: React.FC<SpeedometerDashboardItemProps> = (
    {
        label,
        unit,
        value,
        little
    }: SpeedometerDashboardItemProps
) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.valueContainer}>
                <Text style={little ? styles.littleValue : styles.value}>{value}</Text>
                <Text style={styles.unit}>{unit}</Text>
            </View>
        </View>
    );
};

const styles: any = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: normalize(15)
    },
    label: {
        color: __Colors.statisticsLabel,
        fontFamily: __Fonts.regular,
        fontSize: normalize(18),
        marginBottom: normalize(10),
        textTransform: 'uppercase',
    },
    littleValue: {
        color: __Colors.statisticsValue,
        fontFamily: __Fonts.regular,
        fontSize: normalize(25),
    },
    unit: {
        color: __Colors.statisticsUnit,
        fontFamily: __Fonts.regular,
        fontSize: normalize(20),
        marginLeft: normalize(5),
        textTransform: 'uppercase',
    },
    value: {
        color: __Colors.statisticsValue,
        fontFamily: __Fonts.black,
        fontSize: normalize(30),
    },
    valueContainer: {
        alignItems: 'baseline',
        flexDirection: 'row',
    },
});
