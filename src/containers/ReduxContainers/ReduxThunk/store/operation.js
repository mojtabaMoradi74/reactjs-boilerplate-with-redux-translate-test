import { uniqId } from 'utils/uniqId';
import initialState from './initialState';




export const getTodo = (state, { todos }) => {
    return { ...state, data: todos }
};

export const addTodo = (state, { todo }) => {
    let newState = { ...state }
    newState.data.push(todo);
    return newState;
};

export const toggleComplete = (state, payload) => {

    let newState = { ...state }

    const index = newState.data.findIndex((todo) => todo.id === payload.todo.id);
    newState.data[index] = payload.todo;

    return newState;
}

export const deleteTodo = (state, { id }) => {
    return ({
        ...state,
        data: state.data.filter((todo) => todo.id !== id)
    })
};

export const initial = () => ({ ...initialState });
