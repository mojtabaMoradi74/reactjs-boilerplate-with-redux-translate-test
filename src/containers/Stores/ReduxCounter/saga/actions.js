import actionTypes from "./actionTypes"



const actions = {
    incrementAsync: (param) => {
        return {
            type: actionTypes.INCREMENT_ASYNC,
            ...param,
        }
    },
    cancelIncrementAsync: (param) => {
        return {
            type: actionTypes.CANCEL_INCREMENT_ASYNC,
            ...param,
        }
    }
}

export default actions

