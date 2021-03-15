import counterReducer from './counter';
import loggedReducer from './isLogged';
import colorReducer from './color';
import {combineReducers} from 'redux';

const allReducers=combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    color: colorReducer
})

export default allReducers;