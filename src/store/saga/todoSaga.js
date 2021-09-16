import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
import { fetchData, sagaActions } from "../reducer/todoSaga";

let callAPI = async ({ url, method, data }) => {

    return await Axios({
        url,
        method,
        data
    });

};

export function* fetchDataSaga() {
    try {
        let result = yield call(() =>
            callAPI({ url: "https://reqres.in/api/users?page=2" })
        );
        yield put(fetchData(result.data.data));
    } catch (e) {
        yield put({ type: "TODO_FETCH_FAILED" });
    }
}

export default function* rootSaga() {
    yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}