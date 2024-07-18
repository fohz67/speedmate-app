import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image} from 'react-native';
import {useIcons} from '../hooks/useConsts';
import AccountScreen from '../screens/AccountScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route, focused, color, size) => {
    const {t} = useTranslation();
    const icons = useIcons();
    const icon = focused ? icons[route.name].active : icons[route.name].inactive;

    return <Image source={icon} style={{width: size, height: size, tintColor: color}}/>;
};

const screenOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
        return getTabBarIcon(route, focused, color, size);
    },
    tabBarActiveTintColor: 'black',
    tabBarInactiveTintColor: 'gray',
});

const TabNavigator = () => {
    const {t} = useTranslation();

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={t('home')} screenOptions={screenOptions}>
                <Tab.Screen name={t('home')} component={HomeScreen}/>
                <Tab.Screen name={t('account')} component={AccountScreen}/>
                <Tab.Screen name={t('settings')} component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigator;
