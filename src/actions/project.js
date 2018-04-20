import * as actionTypes from "../constants/actionTypes";
import {createProjectApi} from "../api/api";

const getUserProjectsAction = (projects) => {
    return {
        type: actionTypes.GET_PROJECTS,
        projects
    }
};

export const addNewProjectAction = (project) => {
    return {
        type: actionTypes.ADD_PROJECT,
        project
    }
};

export const updateProject = (project) => {
    return {
        type: actionTypes.UPDATE_PROJECT,
        project,
    }
};

export const deleteProject = (id) => {
    return {
        type: actionTypes.DELETE_PROJECT,
        id
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
