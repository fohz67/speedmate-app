const SECONDS_IN_A_MINUTE: number = 60;
const SECONDS_IN_AN_HOUR: number = SECONDS_IN_A_MINUTE * 60;
const SECONDS_IN_A_DAY: number = SECONDS_IN_AN_HOUR * 24;
const SECONDS_IN_A_WEEK: number = SECONDS_IN_A_DAY * 7;
const SECONDS_IN_A_MONTH: number = SECONDS_IN_A_DAY * 30;
const SECONDS_IN_A_YEAR: number = SECONDS_IN_A_DAY * 365;

export const formatTimer = (seconds: number): string => {
    const hours: string = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes: string = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs: string = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
};

export const formatTime = (seconds: number): string => {
    if (seconds < SECONDS_IN_A_MINUTE) {
        return `${seconds} sec`;
    } else if (seconds < SECONDS_IN_AN_HOUR) {
        const minutes: number = Math.floor(seconds / SECONDS_IN_A_MINUTE);
        return `${minutes} min`;
    } else if (seconds < SECONDS_IN_A_DAY) {
        const hours: number = Math.floor(seconds / SECONDS_IN_AN_HOUR);
        return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
    } else if (seconds < SECONDS_IN_A_MONTH) {
        const days: number = Math.floor(seconds / SECONDS_IN_A_DAY);
        return `${days} ${days === 1 ? 'day' : 'days'}`;
    } else if (seconds < SECONDS_IN_A_YEAR) {
        const months: number = Math.floor(seconds / SECONDS_IN_A_MONTH);
        return `${months} ${months === 1 ? 'month' : 'months'}`;
    } else {
        const years: number = Math.floor(seconds / SECONDS_IN_A_YEAR);
        return `${years} ${years === 1 ? 'year' : 'years'}`;
    }
};

interface FullTime {
    years: number;
    months: number;
    weeks: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const formatFullTime = (seconds: number): FullTime => {
    const years: number = Math.floor(seconds / SECONDS_IN_A_YEAR);
    seconds %= SECONDS_IN_A_YEAR;

    const months: number = Math.floor(seconds / SECONDS_IN_A_MONTH);
    seconds %= SECONDS_IN_A_MONTH;

    const weeks: number = Math.floor(seconds / SECONDS_IN_A_WEEK);
    seconds %= SECONDS_IN_A_WEEK;

    const days: number = Math.floor(seconds / SECONDS_IN_A_DAY);
    seconds %= SECONDS_IN_A_DAY;

    const hours: number = Math.floor(seconds / SECONDS_IN_AN_HOUR);
    seconds %= SECONDS_IN_AN_HOUR;

    const minutes: number = Math.floor(seconds / SECONDS_IN_A_MINUTE);
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
