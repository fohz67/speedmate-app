const toRad = (value: number) => (value * Math.PI) / 180;
const R: number = 6371;

export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const dLat: number = toRad(lat2 - lat1);
    const dLon: number = toRad(lon2 - lon1);
    const a: number = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};
