import {combineReducers} from 'redux';
import login from './profile';

let rootReducer = combineReducers({
    login,
});

export default rootReducer;