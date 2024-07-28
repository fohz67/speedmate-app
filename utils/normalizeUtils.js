import {Dimensions} from 'react-native';

const baseScreenWidth = 390;
const baseScreenHeight = 844;

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scaleWidth = screenWidth / baseScreenWidth;

const maxScale = 1.5;

export const normalizeUtils = (size) => {
    const scaledSize = Math.round(size * scaleWidth);

    return Math.min(scaledSize, size * maxScale);
};

export default normalizeUtils;
