/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {TabNavigator} from "./src/navigation/TabNavigator.tsx";

export function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content"/>
            <TabNavigator/>
        </NavigationContainer>
    );
}
