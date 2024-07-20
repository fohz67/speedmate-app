import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, StyleSheet, View} from 'react-native';
import {navigation} from '../hooks/useOptions';
import AccountScreen from '../screens/AccountScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import theme from "../theme";

const Tab = createBottomTabNavigator();

const getTabBarIcon = (index, focused, color, size) => {
    const icon = focused ? navigation[index].active : navigation[index].inactive;

    return (
        <Image source={icon} style={{width: size, height: size, tintColor: color}}/>
    );
};

const screenOptions = ({route}) => {
    const index = route.params?.index;

    return {
        tabBarIcon: ({focused, color, size}) => getTabBarIcon(index, focused, color, size),
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.default.navigation.selected,
        tabBarInactiveTintColor: theme.default.navigation.unselected,
        tabBarStyle: {
            backgroundColor: theme.default.navigation.background,
            borderBottomWidth: 0,
            borderColor: theme.default.navigation.border,
            borderTopColor: theme.default.navigation.border,
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
            borderTopWidth: 1,
            borderWidth: 1,
            elevation: 0,
            height: 90,
            overflow: 'hidden',
            shadowOpacity: 0,
        },
    };
};

const TabNavigator = () => {
    const {t} = useTranslation();

    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName={t('home')}
                    screenOptions={screenOptions}
                    sceneContainerStyle={{backgroundColor: theme.default.app.background}}
                >
                    <Tab.Screen
                        name={t('home')}
                        component={HomeScreen}
                        initialParams={{index: 0}}
                    />
                    <Tab.Screen
                        name={t('account')}
                        component={AccountScreen}
                        initialParams={{index: 1}}
                    />
                    <Tab.Screen
                        name={t('settings')}
                        component={SettingsScreen}
                        initialParams={{index: 2}}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.default.app.background,
    },
});

export default TabNavigator;
