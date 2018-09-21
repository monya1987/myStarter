import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';

const store = createStore(rootReducer);

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