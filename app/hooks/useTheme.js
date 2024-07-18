const lightTheme = {
    background: '#f2f2f2',
    inputBackground: 'white',
    placeholder: '#9f9f9f',
    separator: '#E0E0E0',
    text: '#171717',
    title: 'black',
};

const darkTheme = {
    background: '#121212',
    inputBackground: '#1e1e1e',
    placeholder: '#4b4b4b',
    separator: '#2d2d2d',
    text: '#cbcbcb',
    title: 'white',
};

const useTheme = (appAppearance) => {
    let theme;
    switch (appAppearance) {
        case 0:
            theme = lightTheme;
            break;
        case 1:
            theme = lightTheme;
            break;
        case 2:
            theme = darkTheme;
            break;
        default:
            theme = lightTheme;
            break;
    }
    return theme;
}

export default useTheme;
