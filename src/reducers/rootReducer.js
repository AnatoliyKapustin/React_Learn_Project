import {combineReducers} from 'redux';
import profile from './profile';
import issues from "./issues";
import projects from "./projects";

let rootReducer = combineReducers({
    profile,
    issues,
    projects
});

export default rootReducer;