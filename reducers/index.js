import { combineReducers } from 'redux';
import initialConfig from '../config';
import demo from '../components/Demo/Demo.reducer';

const config = (state = initialConfig) => {
    return state;
};

export default combineReducers({
    config,
    demo,
});