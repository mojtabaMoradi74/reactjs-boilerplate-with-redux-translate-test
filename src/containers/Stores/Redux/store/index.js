import { createSlice } from "@reduxjs/toolkit";
import initialState from './initialState';
import { addTodoFunc, toggleCompleteFunc, deleteTodoFunc } from './helperFunc';


const reduxTodoSlice = createSlice({
    name: "reduxTodo",
    initialState,
    reducers: {
        addTodo: addTodoFunc,
        toggleComplete: toggleCompleteFunc,
        deleteTodo: deleteTodoFunc,
    },
});

export const { addTodo, toggleComplete, deleteTodo } = reduxTodoSlice.actions;

export default reduxTodoSlice.reducer;