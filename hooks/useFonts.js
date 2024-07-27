import * as Font from 'expo-font';
import {useEffect, useState} from 'react';

export default function useFonts() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'Universo-Black': require('../assets/fonts/Universo-Black.ttf'),
                'Universo-Bold': require('../assets/fonts/Universo-Bold.ttf'),
                'Universo-Light': require('../assets/fonts/Universo-Light.ttf'),
                'Universo-Regular': require('../assets/fonts/Universo-Regular.ttf'),
                'Universo-Stencil': require('../assets/fonts/Universo-Stencil.ttf'),
                'Universo-Thin': require('../assets/fonts/Universo-Thin.ttf'),
            });
            setFontsLoaded(true);
        };

        loadFonts();
    }, []);

    return fontsLoaded;
}
