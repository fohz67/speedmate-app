import {Dimensions} from 'react-native';

export type DimensionsType = { width: number, height: number };

const {width, height}: DimensionsType = Dimensions.get('window');
const baseWidth: number = 390;
const baseScale: number = 1.5;
const isPortrait: boolean = width < height;
const scaleWidth: number = (isPortrait ? width : height) / baseWidth;

export const normalize = (size: number) => Math.min(Math.round(size * scaleWidth), size * baseScale);
