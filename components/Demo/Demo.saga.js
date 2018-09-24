import {call, takeEvery, put, race } from 'redux-saga/effects';
import {delay} from 'redux-saga';
import * as api from '../../services/api';



export function* fetchVariants(action) {
    const {res, timeout} = yield race({
        res: call(api.fetchSomeData, action.payload.productIds),
        timeout: call(delay, 2000)
    });
    if (timeout) {
        yield put({type: 'TIMEOUT'});
    } else {
        yield put({type: 'SET_RESPONSE', payload: {res}});
    }
}

export function* demoSaga() {
    yield takeEvery('SET_DEMO_REDUCER_FIELD_AAA', fetchVariants)
}

export default demoSaga;