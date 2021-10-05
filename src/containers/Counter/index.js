import React, { useState } from "react";
import Increase from "components/Increase";

function Counter() {

    const [count, setCount] = useState(0);
    const [countdown, setCountdown] = useState(0);




    const handleIncrement = () => setCount(prev => prev + 1);

    const handleZero = () => setCount(0);

    const handleDecrement = () => setCount(prev => prev - 1);


    const handleIncrementIfOdd = () => {
        setCount(prev => prev % 2 ? prev + 1 : prev);
    };

    const incrementProps = {
        handleIncrement,
        handleZero,
        handleDecrement,
        handleIncrementIfOdd,
        count,
    };

    return <Increase  {...incrementProps} />
}

export default Counter;