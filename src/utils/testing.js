import React from 'react'
// import checkPropTypes from 'check-prop-types';
// import { render } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
import { appStrings } from 'hook/i18nConfigs/index.js';
import { render } from 'enzyme';
import { checkPropTypes } from './prototypesCheck';
import { ThemeProvider } from "styled-components";
import themes from 'style/themes';
import { AppLanguages } from 'config/AppLanguage';
import configStore from 'store/configStore';
import { Provider } from 'react-redux';

export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

export const ReactIntProvider = ({ children, locale = 'en' }) => {
    return (<IntlProvider locale={locale} messages={appStrings[locale]}>
        {children}
    </IntlProvider>
    );
};


export const StyledThemeProvider = ({ children, locale = 'en' }) => {
    return (<ThemeProvider theme={themes(AppLanguages[locale], 'light')} >
        {children}
    </ThemeProvider>
    );
};


export const Providers = ({ children, locale = 'en', preloadedState = {} }) => {

    const store = configStore(preloadedState);

    return (
        <Provider store={store}>
            <IntlProvider locale={locale} messages={appStrings[locale]}>
                <ThemeProvider theme={themes(AppLanguages[locale], 'light')} >
                    {children}
                </ThemeProvider>
            </IntlProvider>
        </Provider>
    );
};