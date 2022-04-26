import { call, takeEvery, put, all } from "redux-saga/effects";
import { fetchTodoApi, deleteTodoApi, patchTodoApi, postTodoApi } from 'config/api/services';
import actionTypes from './actionTypes';
import actions from "../store/action";


export function* getTodoSaga() {
    try {
        let resp = yield call(fetchTodoApi);
        yield put(actions.getTodo({ todos: resp?.data }));
        console.log({ resp });
    } catch (error) {
        console.log({ error });
    }
}

export function* addTodoSaga(payload) {
    try {
        let resp = yield call(postTodoApi, { title: payload.title });
        console.log({ resp });
        yield put(actions.addTodo({ todo: resp?.data }));
    } catch (error) {
        console.log({ error });
        return error
    }
}

export function* toggleCompleteSaga(payload) {
    try {
        let resp = yield call(patchTodoApi, { id: payload.id, completed: payload.completed });
        yield put(actions.toggleComplete({ todo: resp.data }));
    } catch (error) {
        console.log({ error });
    }
}

export function* deleteTodoSaga(payload) {
    try {
        yield call(deleteTodoApi, { id: payload.id });
        yield put(actions.deleteTodo({ id: payload.id }));
    } catch (error) {
        console.log({ error });
    }
}

export default function* rootSaga() {
    // yield all[[
    //     takeEvery(actionTypes.GET_SAGA_TODO_REQUEST, getTodoSaga),
    //     takeEvery(actionTypes.POST_SAGA_TODO_REQUEST, addTodoSaga),
    //     takeEvery(actionTypes.DELETE_SAGA_TODO_REQUEST, deleteTodoSaga),
    //     takeEvery(actionTypes.PATCH_SAGA_TODO_COMPLETE_REQUEST, toggleCompleteSaga),
    // ]]
    yield takeEvery(actionTypes.GET_SAGA_TODO_REQUEST, getTodoSaga);
    yield takeEvery(actionTypes.POST_SAGA_TODO_REQUEST, addTodoSaga);
    yield takeEvery(actionTypes.DELETE_SAGA_TODO_REQUEST, deleteTodoSaga);
    yield takeEvery(actionTypes.PATCH_SAGA_TODO_COMPLETE_REQUEST, toggleCompleteSaga);
}