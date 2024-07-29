import {Image} from 'react-native';
import Colors from '../assets/theme/colors';
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
        marginLeft: normalize(20),
        marginTop: normalize(0),
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

export default screenOptions;
