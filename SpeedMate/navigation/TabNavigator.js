import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import GPS from '../screens/GPS';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="GPS"
                        component={GPS}/>
            <Tab.Screen name="Profile"
                        component={Profile}/>
            <Tab.Screen name="Settings"
                        component={Settings}/>
        </Tab.Navigator>
    );
}
