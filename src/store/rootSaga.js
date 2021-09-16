import { all, fork } from "redux-saga/effects";
import todo from "containers/Stores/ReduxSaga/saga";

function* watchers() {
    return yield all([
        fork(todo)
    ]);
}

export default watchers;
