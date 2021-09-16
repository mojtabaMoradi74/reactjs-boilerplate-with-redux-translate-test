import React, { Children } from "react";

import routes from "config/routing/routes";

import { LocalizedRoutes, LocalizedLinks } from 'utils/Localized';

import styles from './styles';

import { useIntl } from 'react-intl';
import { Route } from 'react-router-dom';
import { uniqId } from "utils/uniqId";

import Redux from 'containers/Stores/Redux';
import ReduxThunk from "containers/Stores/ReduxThunk";
import ReduxSaga from "containers/Stores/ReduxSaga";


const Stores = () => {

    const { formatMessage } = useIntl();


    const Links = [
        { href: routes.redux, title: 'redux.title', exact: true, component: Redux },
        { href: routes.thunk, title: 'thunk.title', component: ReduxThunk },
        { href: routes.saga, title: 'saga.title', component: ReduxSaga },
    ]

    return (
        <div>
            <styles.div_container>
                <styles.ul_wrap>

                    {Children.toArray(Links.map((elem) => (
                        <styles.li_item>
                            <LocalizedLinks>
                                <styles.navLink activesClassName={'active'} to={elem.href} exact={elem.exact}>
                                    {formatMessage({ id: elem.title || '' })}
                                </styles.navLink>
                            </LocalizedLinks>
                        </styles.li_item>
                    )))}

                </styles.ul_wrap>
            </styles.div_container>

            <LocalizedRoutes>
                {Children.toArray(Links.map(({ href, ...res }) => (
                    <Route key={uniqId()} path={href} {...res} />
                )))}
            </LocalizedRoutes>
        </div>

    );
}
export default Stores;