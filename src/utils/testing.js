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

export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

// function ReactIntProvider(ui, { locale = 'en', ...renderOptions } = {}) {
//     function Wrapper({ children }) {
//         return <IntlProvider locale={locale}>{children}</IntlProvider>
//     }
//     return render(ui, { wrapper: Wrapper, ...renderOptions })
// }

// // re-export everything
// export * from '@testing-library/react'

// // override render method
// export { ReactIntProvider }

export const ReactIntProvider = (component, locale = 'en') => {
    return (<IntlProvider locale={locale} messages={appStrings[locale]}>
        {component}
    </IntlProvider>
    );
};


export const StyledThemeProvider = (component, locale = 'en') => {
    return (<ThemeProvider theme={themes(AppLanguages[locale], 'light')} >
        {component}
    </ThemeProvider>
    );
};