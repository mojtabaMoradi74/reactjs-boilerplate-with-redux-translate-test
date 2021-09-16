import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'config/api';
import axiosConfig from 'lib/axiosConfig';



export const getTodosAsync = createAsyncThunk('todos/getTodosAsync', async () => {
    try {
        const resp = await axiosConfig.get(api.todo);
        return { todos: resp.data };
    } catch (error) {
        console.log({ error });
    }
}
);

export const addTodoAsync = createAsyncThunk('todos/addTodoAsync', async (payload) => {
    try {
        const resp = await axiosConfig.post(api.todo, { title: payload.title });
        const todo = resp.data;
        return { todo };
    } catch (error) {
        console.log({ error });
    }
}
);

export const toggleCompleteAsync = createAsyncThunk('todos/completeTodoAsync', async (payload) => {
    try {
        const resp = await axiosConfig.patch(api.todo + '/' + payload.id, { completed: payload.completed });
        return { todo: resp.data };
    } catch (error) {
        console.log({ error });
    }
}
);

export const deleteTodoAsync = createAsyncThunk('todos/deleteTodoAsync', async (payload) => {
    try {
        const resp = await axiosConfig.delete(api.todo + '/' + payload.id);
        return { id: payload.id };
    } catch (error) {
        console.log({ error });
    }
});