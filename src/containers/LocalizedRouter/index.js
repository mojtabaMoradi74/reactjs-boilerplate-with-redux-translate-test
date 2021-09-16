import { AppLanguages } from 'config/AppLanguage';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Route, Redirect } from 'react-router-dom';

const LocalizedRouter = ({ children, appStrings }) => {

  return (
    <Route path="/:lang([a-zA-Z]{2})">
      {({ match, location }) => {

        // ------------------------------------------------------

        let defaultLanguage, locale;
        let localStorageLanguage = localStorage.getItem('language');
        let urlPrams = match?.params?.lang;

        // ------------------------------------------------------

        const { pathname, search } = location;
        // ------------------------------------------------------

        locale = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
        locale = locale.slice(0, 2)?.toLowerCase()

        // ------------------------------------------------------

        if (localStorageLanguage && AppLanguages[localStorageLanguage]) defaultLanguage = localStorageLanguage;
        else if (AppLanguages[locale]) defaultLanguage = locale;
        else defaultLanguage = AppLanguages.en.code;

        // ------------------------------------------------------

        localStorage.setItem('language', urlPrams || defaultLanguage)

        // ------------------------------------------------------

        const params = match ? match.params : {};
        const { lang = defaultLanguage } = params;

        // ------------------------------------------------------ change url


        if (!pathname.includes(`/${lang}`)) {
          const route = pathname;
          let newPathname = `/${lang}`;
          if (!['', '/'].includes(route)) newPathname += (`/${route}`).substring(1);
          return <Redirect to={{ pathname: newPathname, search }} />
        }

        // ------------------------------------------------------

        return (
          <IntlProvider locale={lang} messages={appStrings[lang]}>
            {children}
          </IntlProvider>
        );

      }}
    </Route>
  );
}
export default LocalizedRouter