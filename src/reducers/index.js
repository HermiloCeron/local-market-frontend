import counterReducer from './counter';
import loggedReducer from './isLogged';
import profileReducer from './profile';
import {combineReducers} from 'redux';

const allReducers=combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    profile: profileReducer
})

export default allReducers;