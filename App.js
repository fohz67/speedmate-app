import 'react-native-gesture-handler';
import 'react-native-reanimated';
import 'intl-pluralrules';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from "react-native";
import useFonts from "./hooks/useFonts";
import TabNavigator from './navigation/TabNavigator';
import './i18n';

export default function App() {
    const fontsLoaded = useFonts();

    if (!fontsLoaded) {
        return <View></View>;
    }

    return (
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    );
}
