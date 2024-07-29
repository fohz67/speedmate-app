import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Colors} from '../assets/styles/colors';
import GPSScreen from '../screens/GPSScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {SettingsProvider} from '../SettingsContext';
import {normalize} from '../utils/normalizeUtils';
import screenOptions from './navigationConfig';

const Tab = createBottomTabNavigator();

const GPSScreenOptions = (setModalVisible) => {
    const {t} = useTranslation();

    return {
        headerTitle: t('gps'),
        headerRight: () => (
            <TouchableOpacity
                style={styles.expandButton}
                onPress={() => setModalVisible(true)}
            >
                <Image
                    source={require('../assets/ic-expand.png')}
                    style={styles.expandIcon}
                    tintColor={Colors.navigationTitle}
                />
            </TouchableOpacity>
        ),
    };
};

const TabNavigator = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const {t} = useTranslation();

    return (
        <View style={styles.container}>
            <SettingsProvider>
                <Tab.Navigator
                    initialRouteName='GPSScreen'
                    screenOptions={screenOptions}
                    sceneContainerStyle={styles.navigatorScene}
                >
                    <Tab.Screen
                        name='GPS'
                        options={GPSScreenOptions(setModalVisible)}
                    >
                        {props => <GPSScreen {...props} modalVisible={modalVisible}
                                             setModalVisible={setModalVisible}/>}
                    </Tab.Screen>
                    <Tab.Screen
                        name='Profile'
                        component={ProfileScreen}
                        options={{headerTitle: t('profile')}}
                    />
                    <Tab.Screen
                        name='Settings'
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
        backgroundColor: Colors.background,
        flex: 1,
    },
    expandButton: {
        marginTop: normalize(0),
        marginRight: normalize(30),
    },
    expandIcon: {
        width: normalize(22),
        height: normalize(22),
    },
    navigatorScene: {
        backgroundColor: Colors.background
    },
});

export default TabNavigator;
