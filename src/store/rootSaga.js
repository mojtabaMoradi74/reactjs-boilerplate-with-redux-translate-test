import { all, fork } from "redux-saga/effects";
import todo from "containers/Stores/ReduxSaga/saga";
import count from "containers/Stores/ReduxCounter/saga/index";

function* watchers() {
    return yield all([
        fork(todo),
        fork(count)
    ]);
}

export default watchers;
