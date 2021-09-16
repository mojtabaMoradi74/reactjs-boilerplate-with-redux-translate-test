import React, { Children } from "react";
// import 'normalize.css';
import themes from "style/themes";
import routing from "config/routing";
import { useIntl } from 'react-intl';
import Layout from './containers/Layout';
import GlobalStyle from "style/global-styles";
import { Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppLanguages } from "config/AppLanguage";
import { LocalizedRoutes } from "utils/Localized";
import { uniqId } from "utils/uniqId";

export default function App() {

  const { locale } = useIntl();

  return (
    <ThemeProvider theme={themes(AppLanguages[locale], 'light')} >
      <GlobalStyle />
      <Layout>
        <LocalizedRoutes>
          {Children.toArray(routing.map((route) => <Route key={uniqId() + route.path} {...route} />))}
        </LocalizedRoutes>
      </Layout>
    </ThemeProvider>
  );

}