import React, { Children } from 'react';
import { useIntl } from 'react-intl';
import styles from './styles';
import routes from 'config/routing/routes';
import { LocalizedLinks } from 'utils/Localized';

const AppRoute = [
    { href: routes.home, title: 'home.title', exact: true },
    { href: routes.summary, title: 'summary.title' },
    { href: routes.redux, title: 'redux.title' },
    { href: routes.counter, title: 'counter' },
]


const MenuBar = () => {
    const { formatMessage } = useIntl();

    return (
        <styles.ul_box>
            {Children.toArray(AppRoute.map((elem) => (
                <styles.li_item>
                    <LocalizedLinks>
                        <styles.navLink activesClassName={'active'} to={elem.href} exact={elem.exact}>
                            {formatMessage({ id: elem.title || '' })}
                        </styles.navLink>
                    </LocalizedLinks>
                </styles.li_item>
            )))}
        </styles.ul_box>
    )

}
export default MenuBar;