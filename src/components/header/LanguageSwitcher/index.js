import React, { Children } from 'react';
import { AppLanguagesArray } from 'config/AppLanguage';
import { useLocation } from 'react-router-dom';
import styles from './styles';
import { useIntl } from 'react-intl';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  // const [t, i18next] = useTranslation();

  // --------------------------------------------------------------
  const { pathname, search } = useLocation();
  const [t] = useTranslation();
  // --------------------------------------------------------------
  function getMatchingRoute(language) {
    const route = pathname.substring(3);
    return { pathname: `/${language}` + route, search };
  }

  // --------------------------------------------------------------
  return (
    <styles.ul_box>
      {Children.toArray(AppLanguagesArray.map((lang) => (
        <styles.li_item>
          <styles.navLink activeClassName={'active'} to={getMatchingRoute(lang.code)}>
            {t(`global.${lang.code}`)}
          </styles.navLink>
        </styles.li_item>
      )))}
    </styles.ul_box>
  );

};
export default LanguageSwitcher