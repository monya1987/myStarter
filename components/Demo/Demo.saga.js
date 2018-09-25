import {call, takeEvery, put, race } from 'redux-saga/effects';
import {delay} from 'redux-saga';
import * as api from '../../services/api';



export function* fetchVariants(action) {
    const {res, timeout} = yield race({
        res:     call(api.fetchSomeData, action.passDemoField),
        timeout: call(delay, 2000)
    });
    if (timeout) {
        yield put({type: 'RECORDS/FETCH_FAILED'});
    } else {
        yield put({type: 'RECORDS/SET', payload: res});
    }
}

export function* demoSaga() {
    yield takeEvery('RECORDS/FETCH', fetchVariants)
}

export default demoSaga;