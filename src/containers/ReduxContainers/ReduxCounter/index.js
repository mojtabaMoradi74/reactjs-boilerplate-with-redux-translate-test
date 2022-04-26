import React from "react";
import Increase from "components/Increase";
import counterAction from "./store/counter/action";
import countDownAction from "./store/countdown/action";
// import actions from "./saga/actions";
import { useDispatch, useSelector } from 'react-redux';
// { cancelIncrement }
// { increment, zero, decrement, incrementIfOdd }
function ReduxCounter() {

    const dispatch = useDispatch();

    const count = useSelector(state => state.counter)
    const countdown = useSelector(state => state.countdown)

    const incrementProps = {
        handleIncrement: () => dispatch(counterAction.increment()),
        handleZero: () => dispatch(counterAction.zero()),
        handleDecrement: () => dispatch(counterAction.decrement()),
        handleCancelIncrementAsync: () => {
            dispatch(countDownAction.cancelIncrement());
            // dispatch(countDownAction.cancelIncrement())
        },
        handleIncrementAsync: () => dispatch(countDownAction.increment({ value: 5 })),
        handleIncrementIfOdd: () => dispatch(counterAction.incrementIfOdd()),
        count,
        countdown
    }

    return <Increase  {...incrementProps} />
}

export default ReduxCounter;