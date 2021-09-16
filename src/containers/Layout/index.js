import React, { memo } from 'react';
import styles from './styles';
import Header from 'containers/Header';

const Layout = ({ children }) => (
    <styles.div_container>
        <Header />
        <styles.main>
            {children}
        </styles.main>
    </styles.div_container>
);

export default memo(Layout)