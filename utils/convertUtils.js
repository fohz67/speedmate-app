export const convertSpeed = (speed, factor) => {
    const factors = [3.6, 2.23694];

    return speed * factors[factor];
};

export const convertAltitude = (altitude, factor) => {
    const factors = [1, 3.28084];

    return altitude * factors[factor];
};

export const convertDistance = (distance, factor) => {
    const factors = [1, 0.000621371];

    return distance * factors[factor];
}
