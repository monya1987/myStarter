import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';


import rootReducer from '../../reducers';
import rootSaga from '../../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(createLogger, sagaMiddleware));

sagaMiddleware.run(rootSaga);

class Layout extends React.Component {
    render() {
        return  <Provider store={store}>
                    <>
                        {this.props.children}
                    </>
                </Provider>;
    }
}

export default Layout;