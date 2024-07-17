import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route, focused, color, size) => {
    let iconPath;

    if (route.name === 'Home') {
        iconPath = focused ? require('../assets/house-fill.png') : require('../assets/house-outline.png');
    } else if (route.name === 'Account') {
        iconPath = focused ? require('../assets/user-fill.png') : require('../assets/user-outline.png');
    } else if (route.name === 'Settings') {
        iconPath = focused ? require('../assets/settings-fill.png') : require('../assets/settings-outline.png');
    }

    return <Image source={iconPath} style={{width: size, height: size, tintColor: color}}/>;
};

const screenOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => getTabBarIcon(route, focused, color, size),
    tabBarActiveTintColor: 'black',
    tabBarInactiveTintColor: 'gray',
});

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Account" component={AccountScreen}/>
                <Tab.Screen name="Settings" component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default TabNavigator;