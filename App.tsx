/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import './src/i18n.tsx';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import 'intl-pluralrules';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {TabNavigator} from "./src/navigation/TabNavigator.tsx";

function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content"/>
            <TabNavigator/>
        </NavigationContainer>
    );
}

export default App;
