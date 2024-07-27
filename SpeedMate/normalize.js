import {Dimensions} from 'react-native';

const baseScreenWidth = 430;
const baseScreenHeight = 932;

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scaleWidth = screenWidth / baseScreenWidth;

const maxScale = 1.5;

export const normalize = (size) => {
    const scaledSize = Math.round(size * scaleWidth);

    return Math.min(scaledSize, size * maxScale);
};

export default normalize;
