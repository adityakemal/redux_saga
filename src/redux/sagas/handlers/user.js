import { put, call } from 'redux-saga/effects'
import { setUser } from '../../duck/user.reducer';
import { requestGetUser } from '../requests/user'


export function* handleGetUser(action) {

    try {
        const response = yield call(requestGetUser);
        const {data} = response

        yield put(setUser(data))

    } catch (error) {
        console.log(error);
    }
  
}