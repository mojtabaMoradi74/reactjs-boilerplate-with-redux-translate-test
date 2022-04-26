import actionTypes from "./actionTypes"


export default {
    increment: (params) => ({
        type: actionTypes.INCREMENT,
        ...params,
    }),
    zero: (params) => ({
        type: actionTypes.ZERO,
        ...params,
    }),
    decrement: (params) => ({
        type: actionTypes.DECREMENT,
        ...params
    }),
    incrementIfOdd: () => ({
        type: actionTypes.INCREMENT_IF_ODD,
    }),
}



