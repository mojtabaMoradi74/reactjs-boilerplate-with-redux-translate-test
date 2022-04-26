import actionTypes from "./actionTypes"


export default {
    increment: (params) => ({
        type: actionTypes.INCREMENT,
        ...params,
    }),
    cancelIncrement: (params) => ({
        type: actionTypes.CANCEL_INCREMENT,
        ...params,
    }),
    countdownTerminated: (params) => ({
        type: actionTypes.COUNT_DOWN_TERMINATED,
        ...params
    }),
}



