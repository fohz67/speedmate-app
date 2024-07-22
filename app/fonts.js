import * as Font from 'expo-font';
import {useEffect, useState} from 'react';

const useFonts = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        loadFonts();
    }, []);

    const loadFonts = async () => {
        try {
            await Font.loadAsync({
                'C800': require('../assets/fonts/C800.ttf'),
                'Universo-Black': require('../assets/fonts/Universo-Black.ttf'),
                'Universo-Bold': require('../assets/fonts/Universo-Bold.ttf'),
                'Universo-Light': require('../assets/fonts/Universo-Light.ttf'),
                'Universo-Regular': require('../assets/fonts/Universo-Regular.ttf'),
                'Universo-Stencil': require('../assets/fonts/Universo-Stencil.ttf'),
                'Universo-Thin': require('../assets/fonts/Universo-Thin.ttf'),
            });
            setFontsLoaded(true);
        } catch (error) {
            console.log('An error occurred while loading the font. Please try again.');
            alert('An error occurred while loading the font. Please try again.');
        }
    };

    return fontsLoaded;
};

export default useFonts;