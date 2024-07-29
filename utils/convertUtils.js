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

export const convertSecondsToTime = (seconds) => {
    const SECONDS_IN_A_MINUTE = 60;
    const SECONDS_IN_AN_HOUR = SECONDS_IN_A_MINUTE * 60;
    const SECONDS_IN_A_DAY = SECONDS_IN_AN_HOUR * 24;
    const SECONDS_IN_A_MONTH = SECONDS_IN_A_DAY * 30;
    const SECONDS_IN_A_YEAR = SECONDS_IN_A_DAY * 365;

    if (seconds < SECONDS_IN_A_MINUTE) {
        return `${seconds} sec`;
    } else if (seconds < SECONDS_IN_AN_HOUR) {
        const minutes = Math.floor(seconds / SECONDS_IN_A_MINUTE);

        return `${minutes} min`;
    } else if (seconds < SECONDS_IN_A_DAY) {
        const hours = Math.floor(seconds / SECONDS_IN_AN_HOUR);

        return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
    } else if (seconds < SECONDS_IN_A_MONTH) {
        const days = Math.floor(seconds / SECONDS_IN_A_DAY);

        return `${days} ${days === 1 ? 'day' : 'days'}`;
    } else if (seconds < SECONDS_IN_A_YEAR) {
        const months = Math.floor(seconds / SECONDS_IN_A_MONTH);

        return `${months} ${months === 1 ? 'month' : 'months'}`;
    } else {
        const years = Math.floor(seconds / SECONDS_IN_A_YEAR);

        return `${years} ${years === 1 ? 'year' : 'years'}`;
    }
};

export const convertSecondsToFullTime = (seconds) => {
    const SECONDS_IN_A_MINUTE = 60;
    const SECONDS_IN_AN_HOUR = SECONDS_IN_A_MINUTE * 60;
    const SECONDS_IN_A_DAY = SECONDS_IN_AN_HOUR * 24;
    const SECONDS_IN_A_WEEK = SECONDS_IN_A_DAY * 7;
    const SECONDS_IN_A_MONTH = SECONDS_IN_A_DAY * 30; // Rough approximation
    const SECONDS_IN_A_YEAR = SECONDS_IN_A_DAY * 365;

    const years = Math.floor(seconds / SECONDS_IN_A_YEAR);
    seconds %= SECONDS_IN_A_YEAR;

    const months = Math.floor(seconds / SECONDS_IN_A_MONTH);
    seconds %= SECONDS_IN_A_MONTH;

    const weeks = Math.floor(seconds / SECONDS_IN_A_WEEK);
    seconds %= SECONDS_IN_A_WEEK;

    const days = Math.floor(seconds / SECONDS_IN_A_DAY);
    seconds %= SECONDS_IN_A_DAY;

    const hours = Math.floor(seconds / SECONDS_IN_AN_HOUR);
    seconds %= SECONDS_IN_AN_HOUR;

    const minutes = Math.floor(seconds / SECONDS_IN_A_MINUTE);
    seconds %= SECONDS_IN_A_MINUTE;

    return `${years} Year${years !== 1 ? 's' : ''}\n` +
        `${months} Month${months !== 1 ? 's' : ''}\n` +
        `${weeks} Week${weeks !== 1 ? 's' : ''}\n` +
        `${days} Day${days !== 1 ? 's' : ''}\n` +
        `${hours} Hour${hours !== 1 ? 's' : ''}\n` +
        `${minutes} Minute${minutes !== 1 ? 's' : ''}\n` +
        `${seconds} Second${seconds !== 1 ? 's' : ''}`;
};
