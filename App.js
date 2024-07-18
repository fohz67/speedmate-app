import 'intl-pluralrules';
import i18n from 'i18next';
import React from 'react';
import {I18nextProvider} from 'react-i18next';
import TabNavigator from './app/navigation/TabNavigator';

export default function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <TabNavigator/>
        </I18nextProvider>
    );
}
