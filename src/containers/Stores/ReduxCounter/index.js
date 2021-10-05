import React from "react";
import Increase from "components/Increase";
import { increment, zero, decrement, incrementIfOdd } from "./store/counter";
import { cancelIncrementAsync } from "./store/countdown";
import actions from "./saga/actions";
import { useDispatch, useSelector } from 'react-redux';

function ReduxCounter() {

    const dispatch = useDispatch();

    const count = useSelector(state => state.counter)
    const countdown = useSelector(state => state.countdown)

    const incrementProps = {
        handleIncrement: () => dispatch(increment()),
        handleZero: () => dispatch(zero()),
        handleDecrement: () => dispatch(decrement()),
        handleCancelIncrementAsync: () => {
            dispatch(actions.cancelIncrementAsync());
            dispatch(cancelIncrementAsync())
        },
        handleIncrementAsync: () => dispatch(actions.incrementAsync({ value: 5 })),
        handleIncrementIfOdd: () => dispatch(incrementIfOdd()),
        count,
        countdown
    }

    return <Increase  {...incrementProps} />
}

export default ReduxCounter;