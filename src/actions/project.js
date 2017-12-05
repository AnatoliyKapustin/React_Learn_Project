import * as actionTypes from "../constants/actionTypes";
import {createProjectApi} from "../api/api";

const addNewProjectAction = (project) => {
    return {
        type: actionTypes.ADD_PROJECT,
        project
    }
};

const getUserProjectsAction = (projects) => {
    return {
        type: actionTypes.GET_PROJECTS,
        projects
    }
};

export function createProject(name, token) {
    return dispatch => {
        new Promise((resolve) => resolve(createProjectApi(name, token)))
            .then(project => dispatch(addNewProjectAction(project)));
    }
}

const getUserProjectsByToken = (token) => {
    return dispatch => {
        new Promise((resolve) => resolve(getProjectsViaApi(token)))
            .then((projects) => dispatch(getUserProjectsAction(projects)))
    }
};
