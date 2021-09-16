// import { createAsyncThunk } from '@reduxjs/toolkit';
// import api from 'config/api';
// import axiosConfig from 'lib/axiosConfig';




// export const getTodosAsync = createAsyncThunk('todos/getTodosAsync', async () => {
//     try {
//         const resp = await axiosConfig.get(api.todo);
//         return { todos: resp.data };
//     } catch (error) {
//         console.log({ error });
//     }
// }
// );

// export const addTodoAsync = createAsyncThunk('todos/addTodoAsync', async (payload) => {
//     try {
//         const resp = await axiosConfig.post(api.todo, { title: payload.title });
//         const todo = resp.data;
//         return { todo };
//     } catch (error) {
//         console.log({ error });
//     }
// }
// );

// export const toggleCompleteAsync = createAsyncThunk('todos/completeTodoAsync', async (payload) => {
//     try {
//         const resp = await axiosConfig.patch(api.todo + '/' + payload.id, { completed: payload.completed });
//         return { todo: resp.data };
//     } catch (error) {
//         console.log({ error });
//     }
// }
// );

// export const deleteTodoAsync = createAsyncThunk('todos/deleteTodoAsync', async (payload) => {
//     try {
//         const resp = await axiosConfig.delete(api.todo + '/' + payload.id);
//         return { id: payload.id };
//     } catch (error) {
//         console.log({ error });
//     }
// });
import { call, takeEvery, put } from "redux-saga/effects";
import { fetchTodoApi, deleteTodoApi, patchTodoApi, postTodoApi } from 'config/api/services';
import actionTypes from './actionTypes';
import { getTodo, addTodo, deleteTodo, toggleComplete } from "../store";


function* getTodoSaga() {
    try {
        let resp = yield call(fetchTodoApi);
        yield put(getTodo({ todos: resp.data }));
    } catch (error) {
        console.log({ error });
    }
}

function* addTodoSaga(payload) {
    try {
        let resp = yield call(postTodoApi, { title: payload.title });
        yield put(addTodo({ todo: resp.data }));
    } catch (error) {
        console.log({ error });
    }
}

function* toggleCompleteSaga(payload) {
    try {
        let resp = yield call(patchTodoApi, { id: payload.id, completed: payload.completed });
        yield put(toggleComplete({ todo: resp.data }));
    } catch (error) {
        console.log({ error });
    }
}

function* deleteTodoSaga(payload) {
    try {
        let resp = yield call(deleteTodoApi, { id: payload.id });
        yield put(deleteTodo({ id: payload.id }));
    } catch (error) {
        console.log({ error });
    }
}

export default function* rootSaga() {
    yield takeEvery(actionTypes.GET_SAGA_TODO_REQUEST, getTodoSaga);
    yield takeEvery(actionTypes.POST_SAGA_TODO_REQUEST, addTodoSaga);
    yield takeEvery(actionTypes.DELETE_SAGA_TODO_REQUEST, deleteTodoSaga);
    yield takeEvery(actionTypes.PATCH_SAGA_TODO_COMPLETE_REQUEST, toggleCompleteSaga);
}