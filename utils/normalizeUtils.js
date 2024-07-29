import {Dimensions} from 'react-native';

const {
    width,
    height
} = Dimensions.get('window');

const baseWidth = 390;
const baseScale = 1.5;

const isPortrait = width < height;
const scaleWidth = (isPortrait ? width : height) / baseWidth;

export const normalize = (size) => {
    const scaledSize = Math.round(size * scaleWidth);

    return Math.min(scaledSize, size * baseScale);
};
