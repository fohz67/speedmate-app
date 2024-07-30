import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import {__Colors} from '../assets/misc/colors';
import {SettingsProvider} from "../SettingsContext.tsx";
import GPSScreen from './GPSScreen';
import {__GpsScreenOptions, screenOptions} from './navigatorConfig';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';

type RootTabParamList = {
    GPS: undefined;
    Profile: undefined;
    Settings: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabNavigator = () => {
    const {t} = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <SettingsProvider>
                <Tab.Navigator
                    initialRouteName="GPS"
                    screenOptions={screenOptions}
                    sceneContainerStyle={styles.navigatorScene}
                >
                    <Tab.Screen name="GPS"
                                options={__GpsScreenOptions(setModalVisible)}>
                        {props => <GPSScreen {...props} modalVisible={modalVisible}
                                             setModalVisible={setModalVisible}/>}
                    </Tab.Screen>
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

const styles: any = StyleSheet.create({
    container: {
        backgroundColor: __Colors.background,
        flex: 1,
    },
    navigatorScene: {
        backgroundColor: __Colors.background,
    },
});

export default TabNavigator;
