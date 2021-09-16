import React, { Children } from 'react';
import { AppLanguagesArray } from 'config/AppLanguage';
import { useLocation } from 'react-router-dom';
import styles from './styles';
import { useIntl } from 'react-intl';

const LanguageSwitcher = () => {

  // --------------------------------------------------------------
  const { pathname, search } = useLocation();
  const { formatMessage } = useIntl();

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
            {formatMessage({ id: lang.code })}
          </styles.navLink>
        </styles.li_item>
      )))}
    </styles.ul_box>
  );

};
export default LanguageSwitcher