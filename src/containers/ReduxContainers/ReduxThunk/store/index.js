import { createSlice } from "@reduxjs/toolkit";
import initialState from './initialState';
import { addTodoAsync, getTodosAsync, toggleCompleteAsync, deleteTodoAsync } from "containers/ReduxContainers/ReduxThunk/thunk";


const reduxTodoSlice = createSlice({
    name: "thunkTodo",
    initialState,
    reducers: {},
    extraReducers: {
        [getTodosAsync.fulfilled]: (state, action) => {
            console.log({ state, action }, { ...state, data: action?.payload?.todos }, 'getTodosAsync.fulfilled');
            return { ...state, data: action?.payload?.todos }
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            state.data.push(action.payload.todo);
        },
        [toggleCompleteAsync.fulfilled]: (state, action) => {
            const index = state.data.findIndex((todo) => todo.id === action.payload.todo.id);
            state.data[index] = action.payload.todo;
        },
        [deleteTodoAsync.fulfilled]: (state, action) => {
            return { ...state, data: state.data.filter((todo) => todo.id !== action.payload.id) }
        },
    },
});

export const { addTodo, toggleComplete, deleteTodo } = reduxTodoSlice.actions;

export default reduxTodoSlice.reducer;