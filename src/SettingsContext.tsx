import React, {createContext, ReactNode, useContext} from 'react';
import {SettingsState, useSettings} from './hooks/useSettings.tsx';

interface SettingsContextType {
    loading: boolean;
    settings: SettingsState;
    updateSetting: <K extends keyof SettingsState>(key: K, value: SettingsState[K]) => Promise<void>;
    pickImage: () => Promise<void>;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

interface SettingsProviderProps {
    children: ReactNode;
}

export const SettingsProvider = ({children}: SettingsProviderProps) => {
    const settings = useSettings();

    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettingsContext = (): SettingsContextType => {
    const context: SettingsContextType | undefined = useContext(SettingsContext);
    if (context === undefined) {
        throw new Error('useSettingsContext must be used within a SettingsProvider');
    }
    return context;
};
