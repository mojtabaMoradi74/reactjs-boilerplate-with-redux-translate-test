import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
function ReactIntProvider(ui, { locale = 'en', ...renderOptions } = {}) {
    function Wrapper({ children }) {
        return <IntlProvider locale={locale}>{children}</IntlProvider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { ReactIntProvider }