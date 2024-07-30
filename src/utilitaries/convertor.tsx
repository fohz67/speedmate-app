type Factor = number[];

const kphMphFactors: Factor = [3.6, 2.23694];
const kphFeetFactors: Factor = [1, 3.28084];
const kmMilesFactors: Factor = [1, 0.000621371];
const metersYardsFactors: Factor = [1, 1.09361];

export const convertMsToKphOrMph = (value: number, factor: number): number => value * kphMphFactors[factor];
export const convertToKmOrFeet = (value: number, factor: number): number => value * kphFeetFactors[factor];
export const convertToKmOrMiles = (value: number, factor: number): number => value * kmMilesFactors[factor];
export const convertToMetersOrYards = (value: number, factor: number): number => value * metersYardsFactors[factor];
