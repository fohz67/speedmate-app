import AsyncStorage from '@react-native-async-storage/async-storage';

const saveItem = async (key, value) => {
    if (value !== null && key != null) {
        await AsyncStorage.setItem(key, String(value));
    }
};

export default saveItem;
