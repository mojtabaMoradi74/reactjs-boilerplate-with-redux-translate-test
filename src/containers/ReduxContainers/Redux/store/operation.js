import { uniqId } from 'utils/uniqId';
import initialState from './initialState';

export const addTodo = (state, { id, title, completed }) => {
    let newState = { ...state }
    const todo = { id: id || uniqId(), title: title, completed: completed || false, };
    newState.data = newState.data || []
    newState.data.push(todo);
    return newState;
};

export const toggleComplete = (state, { id, completed }) => {
    let newState = { ...state }
    const index = newState.data.findIndex((todo) => todo.id === id);
    newState.data[index].completed = completed;
    return newState;
}

export const deleteTodo = (state, { id }) => {
    return ({
        ...state,
        data: state.data.filter((todo) => todo.id !== id)
    })
};

export const initial = () => ({ ...initialState });
