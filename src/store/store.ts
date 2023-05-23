import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from "./reducers/reducers";
import rootSaga from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);