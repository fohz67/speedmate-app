import {Dimensions} from 'react-native';

const {
    width,
    height
} = Dimensions.get('window');

const baseWidth = 390;
const baseScale = 1.5;
const scaleWidth = (width < height ? width : height) / baseWidth;

export const normalize = (size) => Math.min(Math.round(size * scaleWidth), size * baseScale);
