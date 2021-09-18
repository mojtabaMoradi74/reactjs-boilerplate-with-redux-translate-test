import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "store/rootSaga";
import reducers from 'store/rootReducer'


function configStore(preloadedState = {}) {

    let sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: reducers,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }).concat(sagaMiddleware),
        devTools: process.env.NODE_ENV !== 'production',
        preloadedState,
        enhancers: (defaultEnhancers) => [...defaultEnhancers],
    });

    sagaMiddleware.run(rootSaga);

    return store
}
export default configStore;
