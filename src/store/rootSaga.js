import { all, fork } from "redux-saga/effects";
import todo from "containers/ReduxContainers/ReduxSaga/saga";
import count from "containers/ReduxContainers/ReduxCounter/saga";

function* watchers() {
    return yield all([
        fork(todo),
        fork(count)
    ]);
}

export default watchers;
