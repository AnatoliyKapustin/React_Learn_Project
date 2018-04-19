import * as actionTypes from "../constants/actionTypes";
import {createIssue as createIssueViaApi} from "../api/api";
import {getUserByToken} from "./user";

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