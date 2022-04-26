import api from "config/api";
import axiosConfig from "lib/axiosConfig";
import actionTypes from "./actionTypes"


export default {
    getTodo: () => dispatch => {
        return axiosConfig.get(api.todo).then((res) => {
            dispatch({
                type: actionTypes.REDUX_GET_TODO,
                todos: res.data
            })
        })
    }
    ,
    addTodo: (payload) => {
        return dispatch => {
            return axiosConfig.post(api.todo, { title: payload.title }).then((res) => {
                dispatch({
                    type: actionTypes.REDUX_ADD_TODO,
                    todo: res.data,
                })
            })
        }

    },
    toggleComplete: (payload) => {
        return dispatch => {
            return axiosConfig.patch(api.todo + '/' + payload.id, { completed: payload.completed }).then((res) => {
                dispatch({
                    type: actionTypes.REDUX_TOGGLE_COMPLETE,
                    todo: res.data,
                })
            })
        }
    },
    deleteTodo: (payload) => {
        return dispatch => {
            return axiosConfig.delete(api.todo + '/' + payload.id).then(() => {
                dispatch({
                    type: actionTypes.REDUX_DELETE_TODO,
                    id: payload.id,
                })
            })
        }
    },
    initial: () => ({
        type: actionTypes.REDUX_INITIAL,
    }),
}


