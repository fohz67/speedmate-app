import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, StyleSheet, View} from 'react-native';
import {navigation} from '../constants';
import AccountScreen from '../screens/AccountScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import theme from "../theme";

const Tab = createBottomTabNavigator();

const getTabBarIcon = (index, focused, color, size) => {
    const icon = focused ? navigation[index].active : navigation[index].inactive;

    return <Image source={icon}
                  style={{width: size + 3, height: size + 3, tintColor: color}}/>;
};

const screenOptions = ({route}) => {
    const index = route.params?.index;

    return {
        headerShown: true,
        headerStyle: {
            backgroundColor: theme.default.header.background,
            borderBottomWidth: 0,
            elevation: 0,
            height: 130,
            shadowOpacity: 0,
        },
        headerTintColor: theme.default.header.tint,
        headerTitleAlign: 'left',
        headerTitleStyle: {
            fontSize: 30,
            fontFamily: 'Universo-Black',
            marginLeft: 20,
            fontWeight: 'bold',
            textAlign: 'left',
        },
        tabBarActiveTintColor: theme.default.navigation.selected,
        tabBarIcon: ({focused, color, size}) => getTabBarIcon(index, focused, color, size),
        tabBarInactiveTintColor: theme.default.navigation.unselected,
        tabBarShowLabel: false,
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
