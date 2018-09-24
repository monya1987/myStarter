import {all, call} from 'redux-saga/effects';

import demoSaga from '../components/Demo/Demo.saga';

export default function* rootSaga() {
    yield all([
        call(demoSaga),
    ])
};


