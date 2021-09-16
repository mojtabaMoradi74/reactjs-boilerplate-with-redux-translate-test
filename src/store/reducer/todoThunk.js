import { createSlice } from "@reduxjs/toolkit";
import { addTodoAsync, getTodosAsync, toggleCompleteAsync, deleteTodoAsync } from "containers/Stores/ReduxThunk/thunk/todoThunk";
import { uniqId } from "utils/uniqId";


export const todoThunk = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            console.log({ state, action }, 'addTodo');
            const todo = { id: uniqId(), title: action.payload.title, completed: false, };
            state.push(todo);
        },
        toggleComplete: (state, action) => {
            console.log({ state, action }, 'toggleComplete');

            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            console.log({ state, action }, 'deleteTodo');

            return state.filter((todo) => todo.id !== action.payload.id);
        },
    },
    extraReducers: {
        [getTodosAsync.fulfilled]: (state, action) => {
            console.log({ state, action }, 'getTodosAsync.fulfilled');
            return action.payload?.todos;
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            console.log({ state, action }, 'addTodoAsync.fulfilled');

            state.push(action.payload.todo);
        },
        [toggleCompleteAsync.fulfilled]: (state, action) => {
            console.log({ state, action }, 'toggleCompleteAsync.fulfilled');

            const index = state.findIndex((todo) => todo.id === action.payload.todo.id);
            state[index].completed = action.payload.todo.completed;
        },
        [deleteTodoAsync.fulfilled]: (state, action) => {
            console.log({ state, action }, 'deleteTodoAsync.fulfilled');

            return state.filter((todo) => todo.id !== action.payload.id);
        },
    },
});

export const { addTodo, toggleComplete, deleteTodo } = todoThunk.actions;

export default todoThunk.reducer;