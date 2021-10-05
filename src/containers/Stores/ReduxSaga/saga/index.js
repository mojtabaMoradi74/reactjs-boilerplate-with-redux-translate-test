import { call, takeEvery, put } from "redux-saga/effects";
import { fetchTodoApi, deleteTodoApi, patchTodoApi, postTodoApi } from 'config/api/services';
import actionTypes from './actionTypes';
import { getTodo, addTodo, deleteTodo, toggleComplete } from "../store";


export function* getTodoSaga() {
    try {
        let resp = yield call(fetchTodoApi);
        yield put(getTodo({ todos: resp.data }));
    } catch (error) {
        console.log({ error });
    }
}

export function* addTodoSaga(payload) {
    try {
        let resp = yield call(postTodoApi, { title: payload.title });
        yield put(addTodo({ todo: resp.data }));
    } catch (error) {
        console.log({ error });
    }
}

export function* toggleCompleteSaga(payload) {
    try {
        let resp = yield call(patchTodoApi, { id: payload.id, completed: payload.completed });
        yield put(toggleComplete({ todo: resp.data }));
    } catch (error) {
        console.log({ error });
    }
}

export function* deleteTodoSaga(payload) {
    try {
        yield call(deleteTodoApi, { id: payload.id });
        yield put(deleteTodo({ id: payload.id }));
    } catch (error) {
        console.log({ error });
    }
}

export default function* rootSaga() {
    yield takeEvery(actionTypes.GET_SAGA_TODO_REQUEST, getTodoSaga);
    // yield takeEvery(actionTypes.POST_SAGA_TODO_REQUEST, addTodoSaga);
    // yield takeEvery(actionTypes.DELETE_SAGA_TODO_REQUEST, deleteTodoSaga);
    // yield takeEvery(actionTypes.PATCH_SAGA_TODO_COMPLETE_REQUEST, toggleCompleteSaga);
}