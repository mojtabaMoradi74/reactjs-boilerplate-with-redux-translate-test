// import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "store/rootSaga";
import reducers from 'store/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

function configStore(preloadedState = {}) {
    // const composeEnhancers = process.env.NODE_ENV === 'development' ? window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware, thunk)))
    sagaMiddleware.run(rootSaga)

    // let sagaMiddleware = createSagaMiddleware();

    // const store = configureStore({
    //     reducer: reducers,
    //     middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }).concat(sagaMiddleware),
    //     devTools: process.env.NODE_ENV !== 'production',
    //     preloadedState,
    //     enhancers: (defaultEnhancers) => [...defaultEnhancers],
    // });


    return store
}
export default configStore;
