import * as actionTypes from "../constants/actionTypes";

const addNewIssueAction = () => {
    return {
        type: actionTypes.ADD_ISSUE,
        payload: {
            issue
        }
    }
};


export function createIssue() {
    return (dispatch) => {
        new Promise((resolve) => resolve(createIssue()))
            .then((issue) => dispatch(addNewIssueAction(issue)))
    };
}