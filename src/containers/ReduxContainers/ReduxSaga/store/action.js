import actionTypes from "./actionTypes"


export default {
    getTodo: (params) => ({
        type: actionTypes.REDUX_GET_TODO,
        ...params,
    }),
    addTodo: (params) => ({
        type: actionTypes.REDUX_ADD_TODO,
        ...params,
    }),
    toggleComplete: (params) => ({
        type: actionTypes.REDUX_TOGGLE_COMPLETE,
        ...params,
    }),
    deleteTodo: (params) => ({
        type: actionTypes.REDUX_DELETE_TODO,
        ...params
    }),
    initial: () => ({
        type: actionTypes.REDUX_INITIAL,
    }),
}



