const SECONDS_IN_A_MINUTE = 60;
const SECONDS_IN_AN_HOUR = SECONDS_IN_A_MINUTE * 60;
const SECONDS_IN_A_DAY = SECONDS_IN_AN_HOUR * 24;
const SECONDS_IN_A_WEEK = SECONDS_IN_A_DAY * 7;
const SECONDS_IN_A_MONTH = SECONDS_IN_A_DAY * 30;
const SECONDS_IN_A_YEAR = SECONDS_IN_A_DAY * 365;

export const formatTimer = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
};

export const formatTime = (seconds) => {
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

export const formatFullTime = (seconds) => {
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

    return {
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds
    };
};
