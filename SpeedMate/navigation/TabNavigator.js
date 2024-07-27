import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {useTranslation} from "react-i18next";
import {Image, StyleSheet, View} from 'react-native';
import Colors from "../assets/theme/colors";
import normalize from "../normalize";
import GPSScreen from '../screens/GPSScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {SettingsProvider} from "../SettingsContext";

const icons = {
    GPS: {
        fill: require("../assets/house-fill.png"),
        outline: require("../assets/house-outline.png"),
    },
    Profile: {
        fill: require("../assets/user-fill.png"),
        outline: require("../assets/user-outline.png"),
    },
    Settings: {
        fill: require("../assets/settings-fill.png"),
        outline: require("../assets/settings-outline.png"),
    },
};

const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName, focused, color, size) => {
    return <Image source={focused ? icons[routeName].fill : icons[routeName].outline}
                  style={{width: normalize(size + 3), height: normalize(size + 3), tintColor: color}}/>;
};

const screenOptions = ({route}) => ({
    headerShown: true,
    headerStyle: {
        backgroundColor: Colors.default.header.background,
        borderBottomWidth: 0,
        elevation: 0,
        height: normalize(130),
        shadowOpacity: 0,
    },
    headerTintColor: Colors.default.header.tint,
    headerTitleAlign: 'left',
    headerTitleStyle: {
        fontFamily: 'Universo-Black',
        fontSize: normalize(30),
        fontWeight: 'bold',
        marginTop: normalize(20),
        marginLeft: normalize(20),
        textAlign: 'left',
    },
    tabBarActiveTintColor: Colors.default.navigation.selected,
    tabBarIcon: ({focused, color, size}) => getTabBarIcon(route.name, focused, color, size),
    tabBarInactiveTintColor: Colors.default.navigation.unselected,
    tabBarShowLabel: false,
    tabBarStyle: {
        backgroundColor: Colors.default.navigation.background,
        borderBottomWidth: 0,
        borderColor: Colors.default.navigation.border,
        borderTopColor: Colors.default.navigation.border,
        borderTopEndRadius: normalize(20),
        borderTopStartRadius: normalize(20),
        borderTopWidth: normalize(1),
        borderWidth: normalize(1),
        elevation: 0,
        height: normalize(90),
        overflow: 'hidden',
        shadowOpacity: 0,
    },
});

const TabNavigator = () => {
    const {t} = useTranslation();

    return (
        <View style={styles.container}>
            <SettingsProvider>
                <Tab.Navigator
                    initialRouteName="GPSScreen"
                    screenOptions={screenOptions}
                    sceneContainerStyle={styles.navigatorScene}
                >
                    <Tab.Screen
                        name="GPS"
                        component={GPSScreen}
                        options={{headerTitle: t('gps')}}
                    />
                    <Tab.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={{headerTitle: t('profile')}}
                    />
                    <Tab.Screen
                        name="Settings"
                        component={SettingsScreen}
                        options={{headerTitle: t('settings')}}
                    />
                </Tab.Navigator>
            </SettingsProvider>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.default.app.background,
        flex: 1,
    },
    navigatorScene: {
        backgroundColor: Colors.default.app.background
    },
});

export default TabNavigator;
