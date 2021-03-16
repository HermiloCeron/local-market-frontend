import counterReducer from './counter';
import loggedReducer from './isLogged';
import profileReducer from './profile';
import allBusinessReducer from './allBusiness';
import {combineReducers} from 'redux';

const allReducers=combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    profile: profileReducer,
    localBusiness: allBusinessReducer
})

export default allReducers;