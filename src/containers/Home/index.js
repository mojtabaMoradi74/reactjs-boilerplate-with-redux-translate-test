import Increase from "components/Increase";
import React from "react";
import { FormattedMessage } from 'react-intl';
import styles from './styles';

const Home = () => {

    return (
        <styles.div_home_container>
            <styles.h1>
                <FormattedMessage id="home.title" />
            </styles.h1>
            <styles.div_content className={'content'}>
                <FormattedMessage id="home.content" />
            </styles.div_content>

            <Increase />

        </styles.div_home_container>
    );

}

export default Home;









