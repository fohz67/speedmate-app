import {useState} from 'react';

const useSettings = () => {
    const [isKm, setIsKm] = useState(true);
    const [maxSpeed, setMaxSpeed] = useState(100);

    return {
        isKm,
        setIsKm,
        maxSpeed,
        setMaxSpeed,
    };
};

export default useSettings;