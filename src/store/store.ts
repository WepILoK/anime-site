import {createStore, compose, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';

import rootSaga from "./saga";
import {IAnimeListsState, } from "./ducks/animeLists/contracts/state";
import {rootReducer} from "./rootReducers";
import {IUserState} from "./ducks/user/contracts/state";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
    animeLists: IAnimeListsState
    user: IUserState
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)