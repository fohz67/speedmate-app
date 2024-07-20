import AsyncStorage from '@react-native-async-storage/async-storage';

const deviceSave = async (key, value) => {
    if (value !== null && key != null) {
        await AsyncStorage.setItem(key, value.toString());
    }
};

export default deviceSave;
