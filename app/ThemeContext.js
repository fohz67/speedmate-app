import React, {createContext, useContext, useEffect, useState} from 'react';
import useSettings from './hooks/useSettings';

const ThemeContext = createContext();

const lightTheme = {
    background: '#f2f2f2',
    inputBackground: 'white',
    placeholder: '#9f9f9f',
    selectedTab: 'black',
    separator: '#E0E0E0',
    text: '#171717',
    title: 'black',
    unselectedTab: 'gray',
};

const darkTheme = {
    background: '#121212',
    inputBackground: '#1e1e1e',
    placeholder: '#3a3a3a',
    selectedTab: 'white',
    separator: '#2d2d2d',
    text: '#cbcbcb',
    title: 'white',
    unselectedTab: 'gray',
};

const ThemeProvider = ({children}) => {
    const {appAppearance} = useSettings();
    const [theme, setTheme] = useState(lightTheme);

    useEffect(() => {
        switch (appAppearance) {
            case 1:
                setTheme(lightTheme);
                break;
            case 2:
                setTheme(darkTheme);
                break;
            default:
                setTheme(lightTheme);
                break;
        }
    }, [appAppearance]);

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => useContext(ThemeContext);

export {ThemeProvider, useTheme};
