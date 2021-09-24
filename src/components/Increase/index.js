import React, { useState } from "react";
import ButtonAnimationOne from "reusableComponent/ButtonHoverOne";
import styles from './styles';
const Increase = () => {

    const [count, setCount] = useState(0);

    return (
        <styles.div_increase_container>

            <styles.span>{count}</styles.span>

            <styles.div_buttons_container>

                <ButtonAnimationOne className="count-up" type="button" onClick={() => setCount(count + 1)}><span>Count Up</span></ButtonAnimationOne>
                <ButtonAnimationOne className="zero-count" type="button" onClick={() => setCount(0)}><span>Zero</span></ButtonAnimationOne>
                <ButtonAnimationOne className="count-down" type="button" onClick={() => setCount(count - 1)}><span>Count Down</span></ButtonAnimationOne>

            </styles.div_buttons_container>

        </styles.div_increase_container>
    );

}

export default Increase;









