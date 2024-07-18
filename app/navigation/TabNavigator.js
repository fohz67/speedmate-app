import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {I18nextProvider, useTranslation} from 'react-i18next';
import {Image} from 'react-native';
import AccountScreen from '../screens/AccountScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import i18n from '../translations/i18n';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route, focused, color, size) => {
    let iconPath;

    if (route.name === 'Home') {
        iconPath = focused ? require('../../assets/house-fill.png') : require('../../assets/house-outline.png');
    } else if (route.name === 'Account') {
        iconPath = focused ? require('../../assets/user-fill.png') : require('../../assets/user-outline.png');
    } else if (route.name === 'Settings') {
        iconPath = focused ? require('../../assets/settings-fill.png') : require('../../assets/settings-outline.png');
    }

    return <Image source={iconPath} style={{width: size, height: size, tintColor: color}}/>;
};

const screenOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => getTabBarIcon(route, focused, color, size),
    tabBarActiveTintColor: 'black',
    tabBarInactiveTintColor: 'gray',
});

const TabNavigator = () => {
    const {t} = useTranslation();

    return (
        <I18nextProvider i18n={i18n}>
            <NavigationContainer>
                <Tab.Navigator initialRouteName={t('home')} screenOptions={screenOptions}>
                    <Tab.Screen name={t('home')} component={HomeScreen}/>
                    <Tab.Screen name={t('account')} component={AccountScreen}/>
                    <Tab.Screen name={t('settings')} component={SettingsScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        </I18nextProvider>
    );
}

export default TabNavigator;