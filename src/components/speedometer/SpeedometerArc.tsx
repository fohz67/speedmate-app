import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Arc, Progress} from 'react-native-cool-speedometer';
import Speedometer from "react-native-cool-speedometer/dist/Speedometer";
import {__Colors} from "../../../assets/misc/colors.tsx";
import {__Fonts} from "../../../assets/misc/fonts.tsx";
import {Settings} from '../../hooks/useSettings.tsx';
import {Unit, useUnits} from "../../hooks/useUnits.tsx";
import {useSettingsContext} from '../../SettingsContext';
import {DimensionsType, normalize} from "../../utilitaries/normalize.tsx";

interface SpeedometerArcProps {
    speed: number;
}

export const SpeedometerArc: React.FC<SpeedometerArcProps> = ({speed}: SpeedometerArcProps) => {
    const {width, height}: DimensionsType = Dimensions.get('window');
    const speedometerWidth: number = (width < height ? width : height) - normalize(80);
    const units: Unit = useUnits();

    const {
        arcWidth,
        speedometerMaxValue
    }: Settings = useSettingsContext();

    return (
        <View style={styles.container}>
            <Speedometer
                value={speed}
                max={speedometerMaxValue}
                width={speedometerWidth}
                height={speedometerWidth}
                angle={360}
                accentColor={__Colors.speedometerLine}
            >
                <Arc
                    arcWidth={arcWidth}
                    color={__Colors.speedometerArc}
                />
                <Progress arcWidth={arcWidth}/>
            </Speedometer>

            <View
                style={[
                    styles.rectangle,
                    {
                        bottom: -speedometerWidth / 1.3,
                        height: speedometerWidth,
                        width: speedometerWidth
                    }
                ]}
            />

            <Text style={styles.speed}>{speed}</Text>
            <Text style={styles.unit}>{units.speed}</Text>
        </View>
    );
};

const styles: any = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    rectangle: {
        backgroundColor: __Colors.background,
        position: 'absolute',
        transform: [{rotate: '45deg'}],
    },
    speed: {
        color: __Colors.speedometerSpeed,
        fontFamily: __Fonts.black,
        fontSize: normalize(110),
        position: 'absolute',
    },
    unit: {
        bottom: '23%',
        color: __Colors.speedometerUnit,
        fontFamily: __Fonts.regular,
        fontSize: normalize(27),
        position: 'absolute',
        textTransform: 'uppercase',
    }
});
