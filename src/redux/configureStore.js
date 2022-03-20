import { combineReducers, createStore, applyMiddleware } from "redux";
import userReducer from "./duck/user.reducer";

import createSagaMiddleware from 'redux-saga'
import rootSaga, { watcherSaga } from "./sagas/rootSaga";
import counterReducer from "./duck/counter.reducer";

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
    user : userReducer,
    counter : counterReducer
})


const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)
export default store
