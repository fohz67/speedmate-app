import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const baseWidth: number = 390;
const baseScale: number = 1.5;
const isPortrait: boolean = width < height;
const scaleWidth: number = (isPortrait ? width : height) / baseWidth;

export const normalize = (size: number) => Math.min(Math.round(size * scaleWidth), size * baseScale);
