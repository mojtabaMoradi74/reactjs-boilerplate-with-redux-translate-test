import React from 'react';
import styles from './styles';
import MenuBar from 'components/header/MenuBar';
import LanguageSwitcher from 'components/header/LanguageSwitcher';

const Header = () => {

    return (
        <styles.header>
            <styles.nav>
                <MenuBar />
                <LanguageSwitcher />
            </styles.nav>
        </styles.header>
    );
};
export default Header