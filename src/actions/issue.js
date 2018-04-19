import * as actionTypes from "../constants/actionTypes";
import {createIssue as createIssueViaApi, createProjectApi} from "../api/api";
import {getUserByToken} from "./user";
import {addNewProjectAction} from "./project";

const addNewIssueAction = (issue) => {
    return {
        type: actionTypes.ADD_ISSUE,
        issue
    }
};

export function createIssue(name, token) {
    return (dispatch) => {
        new Promise((resolve) => resolve(getUserByToken(token)))
            .then((author) => createIssueViaApi(name, author))
            .then((issue) => dispatch(addNewIssueAction(issue)))
            .catch((error) => console.log("error: " + error))
    };
}

export const deleteIssueAction = (id) => {
    return {
        type: actionTypes.DELETE_ISSUE,
        id
    }
};

export const updateIssue = (issue) => {
    return {
        type: actionTypes.UPDATE_ISSUE,
        issue,
    }
};

export const addIssueToNewProject = (issue, projectName, token) => {
    return dispatch => {
        new Promise((resolve) => resolve(createProjectApi(projectName, token)))
            .then(project => {
                dispatch(addNewProjectAction(project));
                return project;
            })
            .then(project => {
                let updatedIssue = {
                    ...issue,
                    projectId: project.id,
                };
                dispatch(updateIssue(updatedIssue));
            });
    }
};