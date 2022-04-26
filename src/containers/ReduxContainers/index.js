import React, { Children } from "react";

import routes from "config/routing/routes";

import { LocalizedRoutes, LocalizedLinks } from 'utils/Localized';

import styles from './styles';

import { Route } from 'react-router-dom';
import { uniqId } from "utils/uniqId";

import Redux from 'containers/ReduxContainers/Redux';
import ReduxThunk from "containers/ReduxContainers/ReduxThunk";
import ReduxSaga from "containers/ReduxContainers/ReduxSaga";
import Counter from "containers/ReduxContainers/ReduxCounter";
import { useTranslation } from "react-i18next";


const Stores = () => {

    const [t] = useTranslation();


    const Links = [
        { href: routes.redux, title: 'redux.title', exact: true, component: Redux },
        { href: routes.thunk, title: 'thunk.title', component: ReduxThunk },
        { href: routes.saga, title: 'saga.title', component: ReduxSaga },
        { href: routes.reduxCounter, title: 'global.async-counter', component: Counter },
    ]

    return (
        <div>

            <styles.div_container>
                <styles.ul_wrap>
                    {Children.toArray(Links.map((elem) => (
                        <styles.li_item>
                            <LocalizedLinks>
                                <styles.navLink activesClassName={'active'} to={elem.href} exact={elem.exact}>
                                    {t(elem.title)}
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