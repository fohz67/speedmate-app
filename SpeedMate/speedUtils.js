export const convertSpeedToKmh = (speed) => {
    return speed * 3.6;
};

export const sleekSpeed = (speed) => {
    if (speed <= 0) {
        return 0;
    }
    return Math.floor(speed);
};
