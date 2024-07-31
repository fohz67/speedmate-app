import React, {createContext, ReactNode, useContext} from 'react';
import {Settings, useSettings} from './hooks/useSettings.tsx';

const SettingsContext: React.Context<Settings | undefined> = createContext<Settings | undefined>(undefined);

interface SettingsProviderProps {
    children: ReactNode;
}

export const SettingsProvider = ({children}: SettingsProviderProps) => {
    const settings: Settings = useSettings();
    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettingsContext = (): Settings => {
    const context: Settings | undefined = useContext(SettingsContext);
    if (context === undefined) {
        throw new Error('useSettingsContext must be used within a SettingsProvider');
    }
    return context;
};
