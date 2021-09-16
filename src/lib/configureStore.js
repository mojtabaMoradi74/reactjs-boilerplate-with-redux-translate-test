import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import reducers from 'store/rootReducer'


let sagaMiddleware = createSagaMiddleware();
//   const middleware = [...getDefaultMiddleware({ thunk: true }), sagaMiddleware];

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }).concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export default store;
