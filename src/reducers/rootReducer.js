import {combineReducers} from 'redux';
import profile from './profile';
import issues from "./issues";
import projects from "./projects";
import users from "./users";
import filters from "./filters";

let rootReducer = combineReducers({
    profile,
    users,
    issues,
    projects,
    filters
});

export default rootReducer;