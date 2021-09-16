import React, { Children, cloneElement, isValidElement } from 'react';
import { Switch } from 'react-router';
import { useIntl } from 'react-intl';

export const LocalizedRoutes = ({ children }) => {

  const { locale } = useIntl();

  return (
    <Switch>
      {Children.map(children, child => isValidElement(child) ? cloneElement(child, {
        ...child.props, ...(child.props.path !== undefined && { path: localizeRoutePath(child.props.path, locale) }),
      }) : child)}
    </Switch>
  );
};

export const LocalizedLinks = ({ children }) => {
  const { locale } = useIntl();
  return (
    Children.map(children, child => isValidElement(child) ? cloneElement(child, {
      ...child.props, ...(child.props.to !== undefined && { to: localizeRoutePath(child.props.to, locale) }),
    }) : child)
  );
};


/**
 *
 * @param path can be string, undefined or string array
 * @param locale   en , de or ...
 * @returns Localized string path or path array
 */
function localizeRoutePath(path, locale) {

  switch (typeof path) {

    case '':
      return `/${locale}`;

    case '*':
      return path;

    case 'object':
      return path.map(key => `/${locale}` + key);

    default:
      return `/${locale}` + path;
  }
}