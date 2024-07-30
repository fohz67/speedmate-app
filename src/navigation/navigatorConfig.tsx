import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {StackNavigationOptions} from '@react-navigation/stack';
import React from 'react';
import {Image, ImageSourcePropType, TextStyle, ViewStyle} from 'react-native';
import {__Colors} from '../assets/misc/colors.tsx';
import {__Sizes} from "../assets/misc/sizes";
import {normalize} from '../utilitaries/normalize';

interface Icons {
    [key: string]: {
        fill: ImageSourcePropType;
        outline: ImageSourcePropType;
    };
}

const icons: Icons = {
    GPS: {
        fill: require('../assets/ic-house-fill.png'),
        outline: require('../assets/ic-house-outline.png'),
    },
    Profile: {
        fill: require('../assets/ic-user-fill.png'),
        outline: require('../assets/ic-user-outline.png'),
    },
    Settings: {
        fill: require('../assets/ic-settings-fill.png'),
        outline: require('../assets/ic-settings-outline.png'),
    },
};

interface TabBarIconProps {
    routeName: string;
    focused: boolean;
    color: string;
    size: number;
}

const getTabBarIcon = ({routeName, focused, color, size}: TabBarIconProps) => {
    return (
        <Image
            source={focused ? icons[routeName].fill : icons[routeName].outline}
            style={{width: normalize(size + 3), height: normalize(size + 3), tintColor: color}}
        />
    );
};

interface ScreenOptionsProps {
    route: {
        name: string;
    };
}

const __HeaderStyle: ViewStyle = {
    backgroundColor: __Colors.headerBarBackground,
    borderBottomWidth: 0,
    elevation: 0,
    height: normalize(__Sizes.navigationConfig_headerStyle_height),
    shadowOpacity: 0,
} as ViewStyle;

const __HeaderTitleStyle: TextStyle = {
    fontFamily: 'Universo-Black',
    fontSize: normalize(30),
    fontWeight: 'bold',
    marginLeft: normalize(__Sizes.navigationConfig_headerTitleStyle_marginLeft),
    marginTop: 0,
    textAlign: 'left',
} as TextStyle;

const __TabBarStyle: ViewStyle = {
    backgroundColor: __Colors.navigationBackground,
    borderBottomWidth: 0,
    borderColor: __Colors.navigationBorder,
    borderTopColor: __Colors.navigationBorder,
    borderTopEndRadius: normalize(20),
    borderTopStartRadius: normalize(20),
    borderTopWidth: normalize(1),
    borderWidth: normalize(1),
    elevation: 0,
    height: normalize(90),
    overflow: 'hidden',
    shadowOpacity: 0,
} as ViewStyle;

const __GetTabIconStyle = (routeName: string) => ({focused, color, size}: any) => getTabBarIcon({
    routeName: routeName,
    focused,
    color,
    size
});

export const screenOptions = ({route}: ScreenOptionsProps): StackNavigationOptions & BottomTabBarProps => ({
    headerShown: true,
    headerStyle: __HeaderStyle,
    headerTintColor: __Colors.headerBarTint,
    headerTitleAlign: 'left',
    headerTitleStyle: __HeaderTitleStyle,
    tabBarActiveTintColor: __Colors.navigationSelectedButton,
    tabBarIcon: __GetTabIconStyle(route.name),
    tabBarInactiveTintColor: __Colors.navigationUnselectedButton,
    tabBarShowLabel: false,
    tabBarStyle: __TabBarStyle,
});
