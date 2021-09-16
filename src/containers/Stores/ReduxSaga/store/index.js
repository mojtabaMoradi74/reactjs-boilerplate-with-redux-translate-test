import { createSlice } from "@reduxjs/toolkit";
import initialState from './initialState';
import { addTodoFunc, toggleCompleteFunc, deleteTodoFunc, getTodoFunc } from './helperFunc';


const reduxTodoSlice = createSlice({
    name: "sagaTodo",
    initialState,
    reducers: {
        getTodo: getTodoFunc,
        addTodo: addTodoFunc,
        toggleComplete: toggleCompleteFunc,
        deleteTodo: deleteTodoFunc,
    },
});

export const { getTodo, addTodo, toggleComplete, deleteTodo } = reduxTodoSlice.actions;

export default reduxTodoSlice.reducer;