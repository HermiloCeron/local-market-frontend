import loggedReducer from './isLogged';
import profileReducer from './profile';
import allBusinessReducer from './allBusiness';
import flagReducer from './flag';
import {combineReducers} from 'redux';

const allReducers=combineReducers({
    isLogged: loggedReducer,
    profile: profileReducer,
    localBusiness: allBusinessReducer,
    flag: flagReducer
})

export default allReducers;