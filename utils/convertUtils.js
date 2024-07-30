export const convertMsToKphOrMph = (value, factor) => {
    const factors = [3.6, 2.23694];

    return value * factors[factor];
};

export const convertToKmOrFeet = (value, factor) => {
    const factors = [1, 3.28084];

    return value * factors[factor];
};

export const convertToKmOrMiles = (value, factor) => {
    const factors = [1, 0.000621371];

    return value * factors[factor];
}

export const convertToMetersOrYards = (value, factor) => {
    const factors = [1, 1.09361];

    return value * factors[factor];
};
