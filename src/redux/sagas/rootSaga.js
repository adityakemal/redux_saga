import { takeLatest, all, takeEvery } from 'redux-saga/effects'
import { decreament, increament, INCREAMENT } from '../duck/counter.reducer'
import { GET_USER } from '../duck/user.reducer'
import { handleGetUser } from './handlers/user'


export function* watcherSaga() {
    yield takeLatest(GET_USER, handleGetUser)
}

export function* helloSaga() {
    console.log('Hello Sagas!')
}

export function* watchIncrement() {
    yield takeEvery(INCREAMENT, increament)
}

export function* watchDecreament() {
    yield takeEvery('DECREAMENT', decreament)
}

export default function* rootSaga() {
    yield all([
    watcherSaga(),
      helloSaga(),
      watchIncrement()
    ])
}