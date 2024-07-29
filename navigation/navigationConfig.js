import {Image} from 'react-native';
import {Colors} from '../assets/styles/colors';
import {Sizes} from "../assets/styles/sizes";
import {normalize} from '../utils/normalizeUtils';

const icons = {
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

const getTabBarIcon = (routeName, focused, color, size) => {
    return <Image source={focused ? icons[routeName].fill : icons[routeName].outline}
                  style={{width: normalize(size + 3), height: normalize(size + 3), tintColor: color}}/>;
};

const screenOptions = ({route}) => ({
    headerShown: true,
    headerStyle: {
        backgroundColor: Colors.headerBarBackground,
        borderBottomWidth: 0,
        elevation: 0,
        height: normalize(Sizes.navigationConfig_headerStyle_height),
        shadowOpacity: 0,
    },
    headerTintColor: Colors.headerBarTint,
    headerTitleAlign: 'left',
    headerTitleStyle: {
        fontFamily: 'Universo-Black',
        fontSize: normalize(30),
        fontWeight: 'bold',
        marginLeft: normalize(Sizes.navigationConfig_headerTitleStyle_marginLeft),
        marginTop: 0,
        textAlign: 'left',
    },
    tabBarActiveTintColor: Colors.navigationSelectedButton,
    tabBarIcon: ({focused, color, size}) => getTabBarIcon(route.name, focused, color, size),
    tabBarInactiveTintColor: Colors.navigationUnselectedButton,
    tabBarShowLabel: false,
    tabBarStyle: {
        backgroundColor: Colors.navigationBackground,
        borderBottomWidth: 0,
        borderColor: Colors.navigationBorder,
        borderTopColor: Colors.navigationBorder,
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

export default screenOptions;
