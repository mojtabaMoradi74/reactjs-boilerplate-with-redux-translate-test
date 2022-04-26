import { AppLanguages } from 'config/AppLanguage';
import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';

const LocalizedRouter = ({ children }) => {

  const [t, i18next] = useTranslation();

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


        if (lang !== i18next.language) i18next.changeLanguage(lang)
        // ------------------------------------------------------

        return children;

      }}
    </Route>
  );
}
export default withTranslation()(LocalizedRouter)