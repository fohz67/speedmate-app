import {useState} from "react";
import {useTranslation} from "react-i18next";
import {StyleSheet, View} from "react-native";
import {__Colors} from "../assets/misc/colors.tsx";
import {SettingsProvider} from "../SettingsContext";
import {normalize} from "../utilitaries/normalize.tsx";
import {ProfileScreen} from "./ProfileScreen.tsx";
import {SettingsScreen} from "./SettingsScreen.tsx";

export const TabNavigator = () => {
    const {t} = useTranslation();

    const [modalVisible, setModalVisible] = useState(false);

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
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: __Colors.background,
        flex: 1,
    },
    expandButton: {
        marginRight: normalize(30),
        marginTop: normalize(0),
    },
    expandIcon: {
        height: normalize(22),
        width: normalize(22),
    },
    navigatorScene: {
        backgroundColor: __Colors.background
    },
});
