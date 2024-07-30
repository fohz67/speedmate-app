import DeviceInfo from 'react-native-device-info';

const special: string[] = [
    'i386', 'x86_64', 'arm64',
];

const iPhoneWithoutNotch: string[] = [
    'iPhone1,1', 'iPhone1,2',
    'iPhone2,1',
    'iPhone3,1', 'iPhone3,2',
    'iPhone3,3', 'iPhone4,1',
    'iPhone5,1', 'iPhone5,2', 'iPhone5,3', 'iPhone5,4',
    'iPhone6,1', 'iPhone6,2',
    'iPhone7,1', 'iPhone7,2',
    'iPhone8,1', 'iPhone8,2', 'iPhone8,4',
    'iPhone9,1', 'iPhone9,2', 'iPhone9,3', 'iPhone9,4',
    'iPhone10,1', 'iPhone10,2', 'iPhone10,4', 'iPhone10,5',
    'iPhone12,8',
    'iPhone14,6',
];

const iPhoneWithNotch: string[] = [
    'iPhone10,3', 'iPhone10,6',
    'iPhone11,2', 'iPhone11,4', 'iPhone11,6', 'iPhone11,8',
    'iPhone12,1', 'iPhone12,3', 'iPhone12,5',
    'iPhone13,1', 'iPhone13,2', 'iPhone13,3', 'iPhone13,4',
    'iPhone14,2', 'iPhone14,3', 'iPhone14,4', 'iPhone14,5', 'iPhone14,7', 'iPhone14,8',
];

const iPhoneWithDynamicIsland: string[] = [
    'iPhone15,2', 'iPhone15,3', 'iPhone15,4', 'iPhone15,5',
    'iPhone16,1', 'iPhone16,2',
];

export const getDeviceType = (): number => {
    const deviceId: string = DeviceInfo.getDeviceId();

    if (special.includes(deviceId)) {
        return 0;
    } else if (iPhoneWithoutNotch.includes(deviceId)) {
        return 1;
    } else if (iPhoneWithNotch.includes(deviceId)) {
        return 2;
    } else if (iPhoneWithDynamicIsland.includes(deviceId)) {
        return 3;
    } else {
        return 4;
    }
};
