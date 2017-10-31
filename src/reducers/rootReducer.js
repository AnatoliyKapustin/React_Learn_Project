import {combineReducers} from 'redux';
import profile from './profile';
import issues from "./issues";

let rootReducer = combineReducers({
    profile,
    issues
});

export default rootReducer;