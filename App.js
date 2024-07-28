import 'react-native-gesture-handler';
import 'react-native-reanimated';
import 'intl-pluralrules';
import {NavigationContainer} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect} from 'react';
import {StatusBar} from "react-native";
import TabNavigator from './navigation/TabNavigator';
import './i18n';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [loaded, error] = useFonts({
        'Universo-Black': require('./assets/fonts/Universo-Black.ttf'),
        'Universo-Bold': require('./assets/fonts/Universo-Bold.ttf'),
        'Universo-Light': require('./assets/fonts/Universo-Light.ttf'),
        'Universo-Regular': require('./assets/fonts/Universo-Regular.ttf'),
        'Universo-Stencil': require('./assets/fonts/Universo-Stencil.ttf'),
        'Universo-Thin': require('./assets/fonts/Universo-Thin.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <NavigationContainer>
            <StatusBar style="light"/>
            <TabNavigator/>
        </NavigationContainer>
    );
}
