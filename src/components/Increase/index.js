import React from "react";
import ButtonAnimationOne from "reusableComponent/ButtonHoverOne";
import styles from './styles';
const Increase = ({ handleIncrement, handleZero, handleDecrement, handleCancelIncrementAsync, handleIncrementAsync, handleIncrementIfOdd, count, countdown }) => {
    console.log({ handleIncrement, handleZero, handleDecrement, handleCancelIncrementAsync, handleIncrementAsync, handleIncrementIfOdd, count, countdown });

    return (
        <styles.div_increase_container>
            <styles.span className="show-count">{count}</styles.span>
            <styles.div_buttons_container>
                <ButtonAnimationOne className="count-up" type="button" onClick={handleIncrement}><span>Count Up</span></ButtonAnimationOne>
                <ButtonAnimationOne className="zero-count" type="button" onClick={handleZero}><span>Zero</span></ButtonAnimationOne>
                <ButtonAnimationOne className="zero-count" type="button" onClick={handleIncrementIfOdd}><span>odd</span></ButtonAnimationOne>
                <ButtonAnimationOne className="count-down" type="button" onClick={handleDecrement}><span>Count Down</span></ButtonAnimationOne>
                {handleIncrementAsync ? <ButtonAnimationOne className="" type="button" onClick={() => { countdown ? handleCancelIncrementAsync() : handleIncrementAsync() }}>
                    <span>
                        {countdown ? `Cancel increment (${countdown})` : 'increment after 5s'}
                    </span>
                </ButtonAnimationOne> : ""}
            </styles.div_buttons_container>
        </styles.div_increase_container>
    );

}

export default Increase;