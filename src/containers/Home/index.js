import React from "react";
import styles from './styles';
import Increase from "components/Increase";
import { FormattedMessage, useIntl } from 'react-intl';
import { useTranslation } from "react-i18next";

const Home = () => {

    const [t] = useTranslation();


    const incrementProps = {
        // handleIncrement: () => dispatch(increment()),
        // handleZero: () => dispatch(zero()),
        // handleDecrement: () => dispatch(decrement()),
        // handleCancelIncrementAsync: () => {
        //     dispatch(actions.cancelIncrementAsync());
        //     dispatch(cancelIncrementAsync())
        // },
        // handleIncrementAsync: () => dispatch(actions.incrementAsync({ value: 5 })),
        // handleIncrementIfOdd: () => dispatch(incrementIfOdd()),
        // count,
        // countdown
    }


    return (
        <styles.div_home_container>
            <styles.h1>
                {t('home.title')}
            </styles.h1>
            <styles.div_content className={'content'}>
                {t('home.content')}

            </styles.div_content>

            {/* <Increase  {...incrementProps} /> */}

        </styles.div_home_container>
    );

}

export default Home;









